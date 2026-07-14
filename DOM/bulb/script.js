const bulb = document.querySelector(".bulb");
const button = document.querySelector("button");


// let flag = true;

// button.addEventListener("click", ()=>{
//    if(flag){
//     bulb.style.backgroundColor = "yellow";
//    button.innerText = "Turn Off";
//    bulb.style.boxShadow = "0 0 20px yellow";
//    flag = false;
//    }else{
//     bulb.style.backgroundColor = "transparent";
//    button.innerText = "Turn On";
//    bulb.style.boxShadow = "none";
//    flag = true;
//    }
// })

button.addEventListener("click", ()=>{
  bulb.classList.toggle('lightUp');
  button.innerText = bulb.classList.contains('lightUp') ? "Turn Off" : "Turn On";
})