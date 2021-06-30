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
    picture: "productImgs/supplies/toiletPaper.jpg",
    price: 10,
  },
  {
    id: 2,
    name: "Apple",
    catId: categories[3].id,
    description: "nice apple",
    picture: "productImgs/fruits/Apple.jpg",
    price: 2,
  },
  {
    id: 3,
    name: "Coke 0.5L Glass",
    catId: categories[2].id,
    description: "small glass coke bottle",
    picture: "productImgs/drinks/Coke-glass.png",
    price: 3,
  },
  {
    id: 4,
    name: "Coke can",
    catId: categories[2].id,
    description: "Coke in a can",
    picture: "productImgs/drinks/coke-can.png",
    price: 3,
  },
  {
    id: 5,
    name: "fanta can",
    catId: categories[2].id,
    description: "fanta in a can",
    picture: "productImgs/drinks/fanta-can.jpg",
    price: 3,
  },
  {
    id: 6,
    name: "Fuze tea 0.5L",
    catId: categories[2].id,
    description: "small bottle of fuze tea, contains 0.5L",
    picture: "productImgs/drinks/fuzetea-0.5.png",
    price: 3,
  },
  {
    id: 7,
    name: "Sprite 0.5L",
    catId: categories[2].id,
    description: "small bottle of sprite, contains 0.5L",
    picture: "productImgs/drinks/sprite-0.5L.jpg",
    price: 3,
  },
  {
    id: 8,
    name: "Banana",
    catId: categories[3].id,
    description: "It's a banana, it tastes good tho",
    picture: "productImgs/fruits/banana.jpg",
    price: 1,
  },
  {
    id: 9,
    name: "Watermelon",
    catId: categories[3].id,
    description: "Fresh watermelon, tastes good, good for the summer!",
    picture: "productImgs/fruits/watermelon.jpg",
    price: 3,
  },
  {
    id: 10,
    name: "Kiwi",
    catId: categories[3].id,
    description: "its green and weird",
    picture: "productImgs/fruits/Kiwi.jpg",
    price: 1,
  },
  {
    id: 11,
    name: "strawberry",
    catId: categories[3].id,
    description: "best fruit if u ask me, after watermelon",
    picture: "productImgs/fruits/strawberry.jpg",
    price: 0.5,
  },
  {
    id: 12,
    name: "broom",
    catId: categories[0].id,
    description: "this is what u use to clean a house, no water!",
    picture: "productImgs/supplies/broom.jpg",
    price: 5,
  },
  {
    id: 13,
    name: "clorox",
    catId: categories[0].id,
    description: "it's bleach or - אקונומיקה",
    picture: "productImgs/supplies/chlorox.jpg",
    price: 4,
  },
  {
    id: 14,
    name: "Maxima",
    catId: categories[0].id,
    description: "this is avkat kvisa maxima",
    picture: "productImgs/supplies/maksima.jpg",
    price: 5,
  },
  {
    id: 15,
    name: "ariel",
    catId: categories[0].id,
    description:
      "this is avkat kvisa ariel, cheaper than sano maxima, im not biased",
    picture: "productImgs/supplies/ariel.jpg",
    price: 4,
  },
  {
    id: 17,
    name: "Tomato",
    catId: categories[1].id,
    description:
      "fresh tomatoes coming every day from the phillipines *Price is per kg*",
    picture: "productImgs/vegeteables/Tomato.jpg",
    price: 4,
  },
  {
    id: 18,
    name: "cucumber",
    catId: categories[1].id,
    description: "Just a cucumber *Price is per kg*",
    picture: "productImgs/vegeteables/cucumber.jpg",
    price: 3,
  },
  {
    id: 19,
    name: "lettuce",
    catId: categories[1].id,
    description: "its green, its edible take some *Price is per kg*",
    picture: "productImgs/vegeteables/lettuce.jpg",
    price: 4,
  },
  {
    id: 20,
    name: "yellow onions",
    catId: categories[1].id,
    description: "fresh onions from my backyard *Price is per kg*",
    picture: "productImgs/vegeteables/yellow-onion.jpg",
    price: 5,
  },
  {
    id: 21,
    name: "red onions",
    catId: categories[1].id,
    description: "fresh onions from my backyard *Price is per kg*",
    picture: "productImgs/vegeteables/red-onion.jpg",
    price: 4,
  },
  {
    id: 22,
    name: "green onions",
    catId: categories[1].id,
    description: "fresh onions from my backyard *Price is per kg*",
    picture: "productImgs/vegeteables/green-onion.jpg",
    price: 3,
  },
];
lsProducts = localStorage.getItem("products");
// if (JSON.parse(lsProducts) != products && JSON.parse(lsProducts) != null) {
//   products = JSON.parse(lsProducts);
// }
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
