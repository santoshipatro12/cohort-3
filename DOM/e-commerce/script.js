const createBtn = document.querySelector("#create");
const formDiv = document.querySelector(".form");
const closeBtn = document.querySelector("#close");
const form = document.querySelector("form");
const productsDiv = document.querySelector(".products");

const productsArr= []
let updateIndex = null;

let ui =() =>{
    productsDiv.innerHTML = "";
   productsArr.forEach((elem, index) => {
      productsDiv.insertAdjacentHTML("beforeend", `
        <div class="product-card">
            <div class="img">
                <img src="${elem.image}" alt="shoes image">
            </div>
            <div class="text">
                <h3>${elem.name}</h3>
                <p>${elem.description}</p>
                <p>$${elem.price.toFixed(2)}</p>
            </div>
            <div class="btns">elem
                <button onclick="updateProduct('${elem.name}')" class="update-btn">Update</button>
                <button onclick="deleteProduct('${index}')" class="delete-btn">Delete</button>
            </div>
        </div>`);
   }); 
} 

createBtn.addEventListener("click", () => {
    formDiv.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    formDiv.style.display = "none";
});


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let productName = e.target[0].value;
    let productDescription = e.target[1].value;
    let productPrice = e.target[2].value;
    let productImage = e.target[3].value;

    if(productName.trim() =="" || productDescription.trim() =="" || productPrice.trim() =="" || productImage.trim() ==""){
        alert("Please fill all the fields");
        return;
    }

   let obj = {
    id: Date.now(),
    name: productName,
    description: productDescription,
    price: Number(productPrice),
    image: productImage
};
    if(updateIndex !== null){
        productsArr[updateIndex] = obj;
        updateIndex = null;
    }else{
        productsArr.push(obj);
    }
  ui();
  
    form.reset();
      formDiv.style.display = "none";
});

const updateProduct = (name) => {
    formDiv.style.display = "flex";
    let product = productsArr.find((elem) => elem.name === name);
   updateIndex = productsArr.findIndex((elem) => elem.name === name);
    form[0].value = product.name;
    form[1].value = product.description;
    form[2].value = product.price;
    form[3].value = product.image;
}


const deleteProduct = (index) => {
    productsArr.splice(index, 1);
    ui();
}