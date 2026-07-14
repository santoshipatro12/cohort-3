var a ={
    name : "Santoshi",
    age : 25,
    city : "New York"
}
console.log(a.name);

//CRUD
var user ={
    name : "Sarthak",
    age : 25,
    city : "New York"
}
console.log(user.name);
user.batch ='Cohort 3'
console.log(user);
delete user.age
console.log(user);

console.log(Object.keys(user));
console.log(Object.entries(user));

// var user2 = prompt("Enter your name: ")
// var age = Number(prompt("Enter your age: "))
// var city = prompt("Enter your city: ")

// var obj ={user2, age, city}
// console.log(obj)

var user2 ={
    name: "Virat",
    age: 36,
    team: "India",
    isMarried: true,
    skills: ["Batting", "Bowling", "Fielding"],
    spouce :{
        name: "Anushka",
        profession: "Actress",
        age:40,
    }
}
console.log(user2)

var user3 ={
    name: "Rohit",
    greet: (a)=>{
        console.log("Hello ", a)
    }
}
user3.greet("Sarthak")

var {name: namehnu}= user3
console.log(namehnu)

var a =10;
var b = JSON.stringify(a)
console.log(typeof(b))

JSON.parse(b)
console.log(typeof(b))
//copyyy  DEEP
var str = JSON.stringify(user3)
var obj = JSON.parse(str)
console.log(obj)