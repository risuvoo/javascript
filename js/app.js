// ============asyncronus concept ==================
/* const takeOrder = ( customer, callback) => {
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
}); */

//  promiss concept
        /* const hasmeeting = false;
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
            
        };  */
// ==reasone for asyncronus js==

//second output
// using then and catch 

           /*  meetingStatus
                        .then(whereMeet)
                        .then((res) => {
                            console.log(JSON.stringify(res));
                        })
                        .catch((err)=>{
                            console.log(err.message);
                        }) */ 
// using js await 
            /* async function meetingGo(){
                const containerMeetingStatus = await meetingStatus;
                console.log(containerMeetingStatus);
            }
            meetingGo(); */ 
// first output
    /* console.log(`hello`); */ 
// ==reasone for asyncronus js end==


//=============ES11 new features==============

        // globalThis
                /* globalThis.setTimeout(()=>{ console.log('hello')},3000); */

        // BigInt
                /* let maxNum = Number.MAX_SAFE_INTEGER;
                maxNum = maxNum + 1;
                maxNum = BigInt(maxNum) + 1n;
                console.log(maxNum); */

        //Optional Chaining
                //for object
                /*  const learnObj = {
                        name:'shuvo',
                        designation: 'frontend developer',
                        multiAddress:{
                            dhaka:{
                                name:'kawla'
                            },
                            banaripara:{
                                name:'busstand'
                            }
                        }
                    }
                    var addrs = learnObj?.multiAddress?.dhaka?.name;   //chaining
                    console.log(addrs); */

                //for array 
                /* let buisnessWork = ['polytechnic','kodeeo','freelancher'];
                buisnessWork = null;
                console.log(buisnessWork?.[2]); */

        //Nullish Coalescing Operator => ??

         /* Rules : left side value jodi undefined or null hoy tahole right side value output dibe */

        /* 
            Structure : null or undefined value ?? output 

                        ==for compare==
                        (compare variable) ?? output
        */

        // dynamic import

        import suvo from "exteral.js";
        suvo();

//=============ES11 new features end==============

//===============What is "this" in JavaScript - .call(), .apply() and .bind()============


//implecit binding concept
        
        // ex:1         
        /* var publicDetails = {
            name:'shuvo',
            address:'dhaka,bangladesh',
            myFunc: function (){
                console.log(`${this.name}`);
                
            }
        }
        publicDetails.myFunc(); */

        // ex:2
        /* var playerDetailsMain = function (obj){
            obj.playerDetailsMain = function (){
                console.log(this.name);
            }

        }
        var publicUser1 = {
            name : 'rafiqul islam',
            address:'dhaka,bangladesh'
        }
        var publicUser2 = {
            name : 'toriqul islam',
            address:'banaripara,barishal'
        }
        playerDetailsMain(publicUser1);
        publicUser1.playerDetailsMain();
        playerDetailsMain(publicUser2);
        publicUser2.playerDetailsMain(); */

        // ex:3

        /* var person = function (name,age){
            return {
                name: name,
                age:age,
                printName : function (){
                    console.log(`person name is ${this.name} and age is ${this.age}`);   
                }
            }
        }
        var res=person('shuvo',20);
        res.printName();
        console.log(`${res}`); */

        
        
        
        
        
        







       





                
        


        




