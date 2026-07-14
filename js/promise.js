// let p1 = new Promise(function(resolve, reject){

//     let result = true;
    
//     setTimeout(function(){
//         if(result){
//             console.log('Value True')
//             resolve()
//         }else{
//             console.log('Value False')
//             reject()
//         }
//     },3000)
// })

// p1.then(function(){
//     console.log('Promise Resolved')
// })

// .catch(function(){
//     console.log('Promise Rejected')
// })
// .finally(function(){
//     console.log('Promise Finalized')
// })



function orderFood(){

    let myOrder = new Promise(function(resolve, reject){

        console.log('Your order is coming...');

        let orderStatus = true;
        setTimeout(function(){
            if(orderStatus){
                console.log('Condition is True')
                resolve()
            }else{
                console.log('Condition is False')
                reject()
            }
        },3000)
    })

    myOrder.then(function(){
        console.log("Order done hogayaaa")
    

            return new Promise(function(res,rej){
            console.log('Now make a payment');
            let paymentStatus = true;

             setTimeout(function(){
              if(paymentStatus){
                    console.log('Payment done')
                res()
             }else{
            console.log('Payment failed')
            rej()
        }
       },3000)
      });
    })
    .then(function(){
        console.log('Food Eating')
    })
    .catch(function(){
        console.log("Order failed")
    });
}       
orderFood();