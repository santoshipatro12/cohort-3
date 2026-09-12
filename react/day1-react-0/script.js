let h1 = document.createElement("h1");
h1.textContent = "hello"; 

//ReactDOM, Virtual DOM, React.createElement

// let rh1 = React.createElement('h1',{class:'box'},React.createElement('span',{},'I am under h1'));

// console.log('real-dom ->', h1);
// console.log('virtual-dom ->', rh1);

// let realDomEle = document.querySelector('#root');

// let rootOfReact = ReactDOM.createRoot(realDomEle);

// rootOfReact.render(rh1); 

import {a,sum} from './main.js';
console.log(a);

let res = sum(78,56);
console.log(res)

let RDomEle = document.querySelector('#root');
let div = React.createElement('div', {}, 
    [React.createElement('h1', {}, "I m h1"),React.createElement('span', {}, "I m span"),
    React.createElement('h2', {}, "I m h1"),React.createElement('span', {}, "I m span in h2")
]);

ReactDOM.createRoot(RDomEle).render(div);