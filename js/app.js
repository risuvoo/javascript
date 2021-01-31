
//=======================first read========================
//code reading rules:
    /* 

    1.read all comments
    2.all javascript concept sperate by function
    
    */
//=======================first read========================




//================================================================================================================================================================



// ============asyncronus concept ==================
function asyncronusConcept(){
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
        },3000);
    }
    const completeOrder = ( customer) => {
        console.log(`completeOrder for ${customer}`);
    }
    takeOrder('customer1',(customer) => {
        processOrder('customer1',(customer)=>{
            completeOrder(customer);
        });
    });
    
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
    
                meetingStatus
                            .then(whereMeet)
                            .then((res) => {
                                console.log(JSON.stringify(res));
                            })
                            .catch((err)=>{
                                console.log(err.message);
                            }) 
    // using js await 
                async function meetingGo(){
                    const containerMeetingStatus = await meetingStatus;
                    console.log(containerMeetingStatus);
                }
                meetingGo(); 
    // first output
        console.log(`hello`); 
    // ==reasone for asyncronus js end==
}


//=============ES11 new features==============

        //1. globalThis
                function globalThis(){
                    globalThis.setTimeout(()=>{ console.log('hello')},3000);
                }

        //2. BigInt
                function BigInt(){
                    let maxNum = Number.MAX_SAFE_INTEGER;
                    maxNum = maxNum + 1;
                    maxNum = BigInt(maxNum) + 1n;
                    console.log(maxNum);
                }

        //3. Optional Chaining
                //for object
                function optionalChainingForObj(){
                    const learnObj = {
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
                    console.log(addrs);
                }

                //for array 
                function optionalChainingForArr(){
                    let buisnessWork = ['polytechnic','kodeeo','freelancher'];
                    buisnessWork = null;
                    console.log(buisnessWork?.[2]);
                }

        //4. Nullish Coalescing Operator => ??

         /* Rules : left side value jodi undefined or null hoy tahole right side value output dibe */

        /* 
            Structure : null or undefined value ?? output 

                        ==for compare==
                        (compare variable) ?? output
        */

        //5. dynamic import
        
            //method:1
                function dynamicImportM1(){
                    (async function(){
                        const { anotherJs } = await import('./anotherJs.js');
                        anotherJs();
                    })();
                }

            //method:2
                function dynamicImportM2(){
                    import('./anotherJs.js')
                    .then(({anotherJs}) => {
                        anotherJs()

                    });
                }

        //6. Promise.allSettled

            function PromiseAllSettled(){
            var promise1 = new Promise(resolve => resolve('🍔'));
            var promise2 = new Promise((_,reject) => reject('🍏'));
            var promise3 = new Promise(resolve => resolve('🍕'));

            Promise.allSettled([promise1,promise2,promise3])
            .then(response => console.log(response))
            .catch(error => console.log(error));
            }

        //7. matchall

//=============ES11 new features end==============

//===============What is "this" in JavaScript - .call(), .apply() and .bind()============

//implecit binding concept
        
        // ex:1         
        function implecitBindingEx1(){
            var publicDetails = {
                name:'shuvo',
                address:'dhaka,bangladesh',
                myFunc: function (){
                    console.log(`${this.name}`);
                    
                }
            }
            publicDetails.myFunc();
        }

        // ex:2
        function implecitBindingEx2(){
            var playerDetailsMain = function (obj){
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
            publicUser2.playerDetailsMain();
        }

        // ex:3

        function implecitBindingEx3(){
            var person = function (name,age){
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
            console.log(`${res}`);
        }

//Explicit Binding
        function explicitBinding(){
            var peopleCompanyName = function (info1,info2){
                console.log(`${this.name} is a ${this.designation}, and he is a ${info1} and he is a ${info2}`);
            }
            var people = {
                name :'suvo',
                designation:'frontend developer',
    
            }
            var info1 = 'beautiful boy';
            var info2 = 'awesome programmer';
            /*
                //for apply()  
                var info = [info1,info2];
            */
    
            //cal() function
                 // outside method and property access in inner object
                /*  peopleCompanyName.call(people,info1,info2); */
                
                // => another way to call() function => bind()
                /* bind() return a value but dont call the value*/
                var res = peopleCompanyName.bind(people, info1, info2);
                //if you use variable then call as a function
                res();
    
                 // => another way to call() function => apply()
                /* apply() accept in array but call() not accept in array */
                /* peopleCompanyName.apply(people, info); */

        }
// new binding
        //awesome concept in function constructor
        function newBinding(){
            function People(name,age){
                /* assign (new) keyword then create new object and permitter add in new object,this function create => ex: Object.create()  */
                this.name;
                this.age;
                console.log(`${name} is ${age} years old`)

            }

            var suvo = new People('shuvo',20);
            console.log(`${suvo}`);
        }

            



        



        
        
        
        
        
        







       





                
        


        




