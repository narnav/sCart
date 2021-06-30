var cart = [];
var cleanCart = false;
const categories = [
  { id: 1, name: "supplies" },
  { id: 2, name: "Vegetables" },
  { id: 3, name: "Drinks" },
  { id: 4, name: "Fruits" },
];
var products = [
  {
    id: 1,
    name: "toilet paper",
    catId: categories[0].id,
    description: "Its just toilet paper man",
    picture: "productImgs/toiletPaper.jpg",
    price: 10,
  },
  {
    id: 2,
    name: "Apple",
    catId: categories[3].id,
    description: "nice apple",
    picture: "productImgs/Apple.jpg",
    price: 2,
  },
];
lsProducts = localStorage.getItem("products");
if (JSON.parse(lsProducts) != products && JSON.parse(lsProducts) != null) {
  products = JSON.parse(lsProducts);
}
console.log(products);
localStorage.setItem("products", JSON.stringify(products));
localStorage.setItem("categories", JSON.stringify(categories));
function addToCart(prodId, amnt) {
  let shopCartDiv = parent.document.getElementById("shopList");
  let checkProd = false;
  let index = 0;
  let pIndex = 0;
  if (cart != []) {
    if (localStorage.getItem("cart") != null) {
      if (localStorage.getItem("cart") != [""]) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
    }
  }
  if (cleanCart == true) {
    cart = [];
    cleanCart = false;
    localStorage.setItem("cart", JSON.stringify(cart));
    shopCartDiv.innerHTML = "";
    return;
  }
  if (prodId == undefined || amnt == undefined) {
    if (cart == "") {
      shopCartDiv.innerHTML = "";
      return;
    }
    let table = `<table id="cartTable"><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;Name: </td><td>Price</td><td>Amount</td><td></td></tr>`;
    for (let i = 0; i < cart.length; i++) {
      prodId = cart[i].productId;
      amnt = cart[i].amount;
      table += `<tr><td style="white-space: nowrap;"><img src="${cart[i].picture}" style="height:25px; width:25px;">
      ${cart[i].name}</td>
      <td style="text-align:center; id="prodP${prodId}">${cart[i].dPrice}$</td>
      <td style="text-align:center;"><input id="prodA${prodId}" type="number" min="1" value="${cart[i].amount}" style="width:30px;" onchange="updateCart(undefined,${prodId})"> &nbsp;
      <img class="trash" src="svg/49934.png" onmouseover="this.src='svg/49854.png'" onmouseout="this.src='svg/49934.png'"
      onclick="updateCart('delete', ${prodId})"></td>
      <td><button style="background-color:green; height:30px; width:30px; color:white;" onclick="updateCart(innerText,${prodId})">+</button>
      <button style="background-color:red; height:30px; width:30px; color:white;" onclick="updateCart(innerText,${prodId})">-</button></td>`;
    }
    table += `</table>
  <div style="position: absolute;left: 50px; bottom: 50px;">
  <a href="checkout.html" class="btn1" style="color:black">CHECK OUT</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a onclick="clearCart()" class="btn2">Clear</a></div>`;
    shopCartDiv.innerHTML = table;
    localStorage.setItem("cart", JSON.stringify(cart));
    if (cart.length > 6) {
      shopCartDiv.style = "overflow:scroll; height:750px;";
    }
    return;
  }
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == prodId) {
      pIndex = i;
    }
  }
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId == prodId) {
      checkProd = true;
      index = i;
    }
  }
  if (checkProd == false) {
    cart.push({
      productId: prodId,
      name: products[pIndex].name,
      price: products[pIndex].price,
      amount: Number(amnt),
      prodlink: products[pIndex].link,
      dPrice: Number(amnt) * Number(products[pIndex].price),
      picture: products[pIndex].picture,
    });
  }
  if (checkProd == true) {
    cart[index].amount = Number(cart[index].amount) + Number(amnt);
    cart[index].dPrice = Number(cart[index].price) * Number(cart[index].amount);
  }
  let table = `<table id="cartTable"><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;Name: </td><td>Price</td><td>Amount</td><td></td></tr>`;
  for (let i = 0; i < cart.length; i++) {
    prodId = cart[i].productId;
    table += `<tr><td style="white-space: nowrap;"><img src="${cart[i].picture}" style="height:25px; width:25px;">
      ${cart[i].name}</td>
      <td style="text-align:center; id="prodP${prodId}">${cart[i].dPrice}$</td>
      <td style="text-align:center;"><input id="prodA${prodId}" type="number" min="1" value="${cart[i].amount}" style="width:30px;" onchange="updateCart(undefined,${prodId})"> &nbsp;
      <img class="trash" src="svg/49934.png" onmouseover="this.src='svg/49854.png'" onmouseout="this.src='svg/49934.png'"
      onclick="updateCart('delete', ${prodId})"></td>
      <td><button style="background-color:green; height:30px; width:30px; color:white;" onclick="updateCart(innerText,${prodId})">+</button>
      <button style="background-color:red; height:30px; width:30px; color:white;" onclick="updateCart(innerText,${prodId})">-</button></td>`;
  }
  table += `</table>
  <div style="position: absolute;left: 50px; bottom: 50px;">
  <a href="checkout.html" class="btn1" style="color:black">CHECK OUT</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a onclick="clearCart()" class="btn2">Clear</a></div>`;
  shopCartDiv.innerHTML = table;
  if (cart.length > 6) {
    shopCartDiv.style = "overflow:scroll; height:750px;";
  }
  if (cart == []) {
    shopCartDiv.innerHTML = "";
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}
function updateCart(sign, id) {
  console.log(cart);
  if (cart != JSON.parse(localStorage.getItem("cart"))) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  let prodA = document.getElementById(`prodA${id}`);
  console.log(cart);
  console.log(prodA.value);
  index = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId == id) {
      index = i;
    }
  }
  if (sign == "delete") {
    if (
      confirm(
        `are you sure you want to remove "${cart[index].name}" from your cart?`
      )
    ) {
      removeItem(id);
      return;
    } else {
      return;
    }
  }
  if (prodA.value == 0) {
    removeItem(id);
    return;
  }
  if (prodA.value < 0) {
    alert("Please choose a number bigger than 0, or 0 to remove from cart");
    return;
  }
  if (sign == undefined) {
    cart = JSON.parse(localStorage.getItem("cart"));
    cart[index].amount = Number(prodA.value);
    cart[index].dPrice = cart[index].price * Number(prodA.value);
    localStorage.setItem("cart", JSON.stringify(cart));
    addToCart();
    return;
  }
  console.log(`index: ${index}`);
  if (sign == "-") {
    if (prodA.value <= 1) {
      return;
    }
    prodA.value--;
  }
  if (sign == "+") {
    prodA.value++;
  }
  console.log(`amount before${cart[index].amount}`);
  cart[index].amount = Number(prodA.value);
  cart[index].dPrice = cart[index].price * Number(prodA.value);
  console.log(`amount after${cart[index].amount}`);
  localStorage.setItem("cart", JSON.stringify(cart));
  addToCart();
}
function addCount(sign, id) {
  let prodA = document.getElementById(`prodA${id}`);
  if (sign == "-") {
    if (prodA.value <= 1) {
      return;
    }
    prodA.value--;
  }
  if (sign == "+") {
    prodA.value++;
  }
}

function loadStorage() {
  if (localStorage.getItem("cart") != null) {
    if (localStorage.getItem("cart") != [""]) {
      cart = JSON.parse(localStorage.getItem("cart"));
      addToCart();
    }
  }
}

function removeItem(prodId) {
  // debugger;
  let ind = 0;
  console.log(prodId);
  cart = JSON.parse(localStorage.getItem("cart"));
  if (cart.length <= 1) {
    cart = [];
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    cleanCart = true;
    addToCart();
    return;
  }
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId == prodId) {
      ind = i;
    }
  }
  console.log(ind);
  cart.splice(ind, 1);
  console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
  cart = JSON.parse(localStorage.getItem("cart"));
  addToCart(prodId);
}
function clearCart() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  addToCart();
}
