const { kafka } = require('./client');
async function init() {
    const consumer = kafka.consumer({ groupId: 'my-group' });

    console.log('Connecting Consumer...');
    await consumer.connect();
    console.log('Consumer Connected Successfully');
    await consumer.subscribe({topics:['rider-updates'],fromBeginning:true});
    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log({
                key: message.key.toString(),
                value: message.value.toString(),
                headers: message.headers,
            })
        },
    })
    /*await consumer.run({
        eachMessage:async({topic,partition,message,heartbeat,pause}) =>{
            console.log(`[${topic}]:PART${partition}:`,message);
        },
        
    
    });*/
    //await consumer.disconnect();

    //await producer.send({ topic: 'rider-updates', messages: [{ partition: 0, key: 'location-update', value: JSON.stringify({ name: 'Wasif', loc: 'Islamabad' }) }] });
    //await producer.disconnect();
}
init();