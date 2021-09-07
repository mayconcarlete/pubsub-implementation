const { PubSub } = require('@google-cloud/pubsub')

async function start(
    projectId=process.env.PROJECT_ID,
    topicName=process.env.TOPIC_NAME,
    subscriptionName=process.env.SUBSCRIPTION
){
    const pubsub = new PubSub()
    const subscription = pubsub.topic(topicName).subscription(subscriptionName)
    
    subscription.on('message', message => {
        console.log('Message arrived')
        console.log(message.data.toString())
        process.exit(0)
    })

    subscription.on('error', error => {
        console.log('Error')
        console.log(error)
        process.exit(1)
    })
}

start().then(data => {
    console.log('starting...')
}).catch(console.log)