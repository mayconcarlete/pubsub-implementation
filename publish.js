const { PubSub } = require('@google-cloud/pubsub')

async function start(
    projectId=process.env.PROJECT_ID,
    topicName=process.env.TOPIC_NAME,
    subscriptionName=process.env.SUBSCRIPTION
){
    const pubsub = new PubSub()
    const topic = await pubsub.topic(topicName).publish(Buffer.from('Test message'))
    
    console.log(`Topic: ${topic} created`)
}

start()
    .then(data => {
        console.log('starting reading...')
    }).catch(console.log)