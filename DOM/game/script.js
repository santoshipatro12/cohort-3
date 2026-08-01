// const main = document.querySelector("main");

// main.addEventListener('click',(event) => {
//     console.log(event.target);
// })

// setInterval(() =>{
//     console.log("Hello");
// },1000);

// setTimeout(() => {
//     console.log("Iam setTimeout");
// },10000);

// let random = Math.random()*10; // 0-1
// let r = Math.floor(random); // 0-9

// console.log(r)

const main = document.querySelector("main");
const overlay = document.querySelector("#overlay");

const btn = document.querySelector("button");
const timer = document.querySelector("#timer");
const scoree = document.querySelector("#score");

const box = document.createElement("div");
box.classList.add("box");
 main.append(box)
 
let time = 0;
let score = 0;
let interval;

const randomColor = () =>{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`;
}

const randomBox =()=>{
    box.style.backgroundColor = randomColor();
   
    let mainH = main.clientHeight - box.offsetHeight ;  //box child of main so we need to subtract box height from main height to get the available height for box to move
    let mainW = main.clientWidth - box.offsetWidth ;
        
    const rY = Math.random()*mainH; // 0-1
    const rX = Math.random()*mainW; // 0-1
    box.style.top = `${rY}PX`;
    box.style.left = `${rX}PX`;
}

btn.addEventListener('click', () =>{

    clearInterval(interval);

    interval = setInterval(() => {
        
        randomBox();
           time +=1;
           timer.textContent = time;

    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        overlay.style.display = "flex";
    },10000)
});


box.addEventListener('click',() =>{
    score +=1;
    scoree.textContent = score;
})