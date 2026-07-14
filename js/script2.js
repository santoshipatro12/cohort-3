
function mul(a,b){
  return a*b;
}
console.log(mul(2,3))

function greet(name) {
    return "Hello " + name; 
}
console.log(greet("World"));

var greet2 =(name) =>{
    return "Hello " + name;         
}
console.log(greet2("Worldd"));


function sum(...numbers){
    let tot = 0;

    for(let n of numbers){
        tot +=n;
    }
    return tot;
}
console.log(sum(5,4));


function countVowels(str){
    let count = 0;

    for(let char of str.toLowerCase()){
        if("aeiou".includes(char))
            count++;
    }
    return count;
}
console.log(countVowels("Santoshi"));


function isPalindrome(str){
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPalindrome("racecar"));


function message(){
    console.log("Helllooo after 2 seconds")
}

setTimeout(message, 2000);
    console.log("Waiting for 2 seconds...");



function executeTwice(callback){
    callback();
    callback();
}

function greet(name){
    return "Hello " + name;
}

executeTwice(() => console.log(greet("World")));


function outer(){
    return function inner(){
        console.log("Inner function executed");
    };
}
const result = outer();
console.log(result())



function sub(a,b){
    return a - b;
}
console.log(sub(5,3))


let total = 0 ;

function add(value){
    total += value;
}
add(10);
console.log(total);
