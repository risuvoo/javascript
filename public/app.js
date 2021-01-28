// ============asyncronus concept ==================
/* 
const takeOrder = ( customer, callback) => {
    console.log(`take order ${customer}`);
    callback(customer);
}
const processOrder = ( customer,callback ) => {
    console.log(`proccessing order for ${customer}`);
    
    setTimeout(()=>{
        console.log(`cooking for ${customer}`);
        console.log(`serve ${customer} table`); 
        callback(customer);
    },3000)
}
const completeOrder = ( customer) => {
    console.log(`completeOrder for ${customer}`);
}
takeOrder('customer1',(customer) => {
    processOrder('customer1',(customer)=>{
        completeOrder(customer);
    });
});

*/

//  promiss concept

const hasmeeting = false;
// ==Promise use as a object constractor==
const meetingStatus = new Promise((resolve,reject)=>{
   if(!hasmeeting){
       const meeting = {
           name: 'technical',
           location: 'kawla',
           time: '10 PM'
       }
       resolve(meeting);
   }else{
       reject(new Error('meeting already scheduled'))
   }
});
const whereMeet = (meeting) => {
    const whr = `${meeting.name} meeting is scheduled in ${meeting.location} at ${meeting.time}`;
    // ==Promise use as a object==
    return Promise.resolve(whr)
    
};
// ==reasone for asyncronus js==
//second output

// using then and catch 
/* meetingStatus
            .then(whereMeet)
            .then((res) => {
                console.log(JSON.stringify(res));
            })
            .catch((err)=>{
                console.log(err.message);
            }) */

// using js await 


async function meetingGo(){
    const containerMeetingStatus = await meetingStatus;
    console.log(containerMeetingStatus);
}


meetingGo();



// first output
console.log(`hello`); 
// ==reasone for asyncronus js end==
