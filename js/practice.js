let str = "Hello, World! hello,";

str = str.toLowerCase().trim();
let words = str.split(" ");
let count = {};

for(let word of words){
    if(count[word]){
        count[word]++;
    } else {
        count[word] = 1;
    }
}
console.log(count);


let prices =[100,250,500,150,700]

let premArr = prices.filter((price) => price > 300)

console.log(premArr)


let marks =[80,90,70,85,95]
let avg = marks.reduce((acc, curr) =>{
    return acc + curr
},0)/marks.length
console.log(avg)



let num =[1,2,3,2,4,2,5,1,1,1]

let count1 ={}
for(let i = 0; i < num.length; i++){
    let number = num[i];
    if(count1[number]){
        count1[number]++;
    } else {
        count1[number] = 1;
    }

}
let maxCount = 0;
let mostFrequentNum = null;
for(let key in count1){
    if(count1[key]>maxCount){
        maxCount = count1[key];
        mostFrequentNum = key;
    }
}
console.log(mostFrequentNum);



let user ={
    name: "John",
    age: 30,
    city: "New York"
}
user.age =21

for(let [key,value] of Object.entries(user)){
    console.log(key, value)
}



let employees ={
    aman:25000,
    priya:28000,
    rohan:30000
}
let highestSalary = 0;
for(let [key,value] of Object.entries(employees)){
    if(value>highestSalary){
        highestSalary = value;
    }
}
console.log(highestSalary);



function greet(name){
    return `Hello, ${name}!`;
}
console.log(greet("Santoshiii"))



function calDiscount(price){
     price -= price*0.1
     return price;
}
console.log(calDiscount(500))



let cart =[
    {name: "Mouse", price:500, qty:2},
    {name: "Keyboard", price:1000, qty:1},
    {name: "Monitor", price:5000, qty:1}
]

let total =cart.reduce((acc, item)=>{
    return acc + item.price * item.qty
}, 0)
console.log(total)



let student = [
    {
        name: "santoshi",
        marks:[80,60,85]
    },
    {
        name: "Rahul",
        marks:[75,85,90]
    }
]

function generateReport(student){
    let report = [];
    for(let stu of student){
        let avg = stu.marks.reduce((acc, curr) => acc + curr, 0)/stu.marks.length
     

let grade
if(avg >= 90){
    grade = "A"
} else if(avg >= 80){
    grade = "B"
} else if(avg >= 70){
    grade = "C"
} else if(avg >= 60){
    grade = "D"
} else {
    grade = "F"
}

report.push({
    name: stu.name,
    average: avg,
    grade: grade
});  

    }
    return report;
}

console.log(generateReport(student))