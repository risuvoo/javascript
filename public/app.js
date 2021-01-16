/* 
============asyncronus concept ==================

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