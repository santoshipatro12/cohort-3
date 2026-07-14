// var a = [85, 75 , 87, 8, 9, 45]
// console.log(a)
// console.log(a[4])
// console.log(a.length -1)
// console.log(a[a.length -1])

// console.log(a.splice(1,2,100,200))
// console.log(a)

// var an = [85, 75 , 87,'ol', 8, 9, 45,[5,2,3,4]]
// console.log(an[7][1])

var arr = [1, 2, 3,4,6]

// arr.forEach(function(){
//     console.log("Hellooo")
// })

// arr.forEach(function(ele,idx){
//     console.log(idx)
// })

// var sum =0;
// arr.forEach(function(ele){
//     sum += ele
// })
// console.log(sum)

// let run =() =>{
//     console.log("Hello")
// }

// arr.forEach(run);

function double(x){
    return x * 2;

} 
var arr2= arr.map(double)
console.log(arr2)

var users = ['Sarthak', 'Rohit', 'Ramesh', 'Suresh']

var newusers = users.map(function(ele){
    return ele + "Sharma"
})
console.log(newusers)


var arr3 =[-1, 2, -3, 4, 5]

var newarr = arr3.map(function(ele){
    return ele > 0;
})
console.log(newarr)

var arr4 = [105,20,300,40,50]



var arr5 =[18932,3423,3455,4311]

var max = arr5.reduce(function(acc,ele){
    if(ele > acc){
        return ele
    }
    return acc
})
console.log(max)