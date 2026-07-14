let response = fetch('https://fakestoreapi.com/products')

// response.then(function(data){
//     console.log('Data fetched successfully')
    
//     return data.json()

// })
// .then(function(myData){
//     console.log('hahaha')
//     console.log(myData)
// })

// .catch(function(){
//     console.log('Data not fetched')
// })


async function dataLao(){
   try {
     let response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json()
    

   } catch (error) {
    console.error('Error fetching data:', error)
   }
}

dataLao()