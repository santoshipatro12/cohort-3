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

//attributes and properties

const h3 = document.querySelector('#id1');

console.log(h3.getAttribute("id"))
console.log(h3.getAttribute("class"))

h3.setAttribute("width", "200");

h3.removeAttribute("width");
console.log(h3.hasAttribute("width")) //returns true or false

const inp = document.querySelector('#input1');
const btn = document.querySelector('#btn');



btn.addEventListener('click', () =>{
 console.log(inp.value);  //logs the value entered in the input field
})

const main = document.querySelector('main');
const footer = document.createElement('footer'); //creates a new footer element but does not add it to the DOM
main.appendChild(footer); //adds the footer element to the DOM

footer.innerHTML = ' Hey i m <i> footer </i> element'; //adds content to the footer element
main.appendChild(footer); //adds the footer element to the DOM
