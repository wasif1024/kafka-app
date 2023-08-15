
//import {kafka} from './client';
const {kafka}=require('./client');
async function init(){
    const admin=kafka.admin();
    console.log('Admin Connecting...');
    admin.connect();
    console.log('Admin Connection Success...');
    console.log('Creating Topic');
    await admin.createTopics({
        topics:[{
            topic:'rider-updates',
            numPartitions:2
        }]
    })
    console.log('Topic Created Success...');
    console.log('Admin Disconnected...');
    await admin.disconnect();

}
init();