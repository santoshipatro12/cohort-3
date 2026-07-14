// function fact(n){
//    if(n===0 || n===1){
//       return 1;
//    }
//    return n *(fact(n-1));
// }
// console.log(fact(5))


function fib(n){
   if(n===0){
      return 0;
   }
   if(n===1){
      return 1;
   }
   return fib(n-1) + fib(n-2);
}
console.log(fib(6))


function power(base , exp){
  if(exp===0){
     return 1;
  }
  return base * power(base, exp - 1);   // 2 * power(2,3)
}
console.log(power(2, 4))     

;(function (){
   console.log("Executed");
} )();

function memoizedFactoria(){
   let cache ={};

   return function factorial(n){
      if(n in cache) return cache[n];
      if (n===0 || n===1) return 1;
      
      cache[n]= n * factorial(n-1);
      return cache[n];
   };
}
let fact = memoizedFactoria();
console.log(fact(5));

function createCounter(){
   let count = 0;
   return function(){
      count++;
      return count;
   };
}
let counter = createCounter();

console.log(counter())
console.log(counter())
console.log(counter())


function curryadd(a){
     
   return function(b){
      return a+b;
   }
}
console.log(curryadd(5)(6))


function debounce(mainfunc, delay){
  let timer;

  return function(...args){
   clearTimeout(timer);

   timer = setTimeout(()=>{      //After 1 second,
                                 //run mainfunc()
      mainfunc(...args);
   },delay);
};
}

const search = debounce(()=>{
   console.log("Searching");
}, 1000);

search();
search();
search();


//Throtle
function throttle(fn, delay){
   let shouldcall = true;

   return function(...args){
      if(!shouldcall) return;

      fn(...args);
      shouldcall = false;

      setTimeout(()=>{
         shouldcall = true;
      }, delay);
   };
}

const scrollHandler = throttle(()=>{
   console.log("Scrolling...");
},1000);

scrollHandler();
scrollHandler();
scrollHandler();
scrollHandler();

//Write a function that executes only once.

function once(fn){
   let called = false;

   return function(...args){
      if(called) return;
      
      called = true;
      return fn(...args);
   };
}

const greet = once(()=>{
   console.log("Hello, world!");
});
greet();
greet();
greet();

//Create custom implementation of map.

function myMap(arr, callback){
   let result = [];
   for(let i=0; i<arr.length; i++){
       result.push(callback(arr[i],i, arr))
   }
   return result;
}

const nums = [1,2,3,4,5];
const output = myMap(nums, function(num){
   return num*2;
});
console.log(output);