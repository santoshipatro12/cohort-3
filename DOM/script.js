// console.log(document)

//Selection of elements
//only 1st element will be selected


const h1 = document.querySelector("h1");
console.dir(h1);                            //DOM tree structure of the h1 element

//Change content
h1.textContent = 'DOM Manipulation Complete';
h1.style.color = 'blue';    
h1.style.backgroundColor = 'yellow';
h1.style.padding = '10px';          
h1.style.border = '2px solid black';
h1.style.textAlign = 'center';
h1.style.fontSize = '24px';

const body = document.body;

console.log(body.childNodes) //returns all the child nodes including text nodes
console.log(body.children) //returns only the elements, not the text nodes

