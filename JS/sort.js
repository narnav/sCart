var url_string = window.location.href;
var url = new URL(parent.url_string);
var indexUrl = new URL(url_string);
var indexCats = indexUrl.searchParams.get("cat");
var cats = url.searchParams.get("cat");
const cardCon = document.getElementById("testCards");
function catDisplay() {
  let _cat = document.getElementById("cat_List");
  _cat.innerHTML = `<p id="_Home" onclick="window.location.href = 'index.html'" class="cat" style="font-size: 40px;">Home</p>`;
  for (let i = 0; i < categories.length; i++) {
    _cat.innerHTML += `<p id="cat${categories[i].id}" onclick="window.location.href = 'index.html?cat=${categories[i].id}'" class="cat" style="font-size: 40px;">&nbsp;${categories[i].name}</p>`;
  }
}
if (url_string.includes("main") == false) {
  catDisplay();
} else {
  sortProds();
}
function sortProds() {
  if (screen.width / screen.height > 16 / 9) {
  }
  if (screen.width / screen.height == 4 / 3) {
    // {console.log('wide')}
    // console.log('square')
  }
  if (screen.width > screen.height) {
    // console.log('yo')
  }
  if (screen.width < screen.height) {
    // console.log('mobile')
  }
  if (cats > 0) {
    for (let i = 0; i < products.length; i++) {
      if (cats != products[i].catId) {
      } else {
        cardCon.innerHTML += `<div class="card" style="width: 18rem; margin: 2.5%;">
        <img class="card-img-top" style="height:200px;width:200px; align-self: center; padding-right: 20px"src="${products[i].picture}" alt="${products[i].description}">
        <div class="card-body">
        <h5 class="card-title" style="display: flex;justify-content: center">${products[i].name}</h5>
        <h6 class="card-title" style="display: flex;justify-content: center; color: green;"> ${products[i].price}$</h5>
        <p class="card-text"style="display: flex;justify-content: center">${products[i].description}</p>
        <div style="display: flex;justify-content: center">
        <button class="btn btn-success" onClick="addCount(innerText,value)"value="${products[i].id}">+</button>
        <input id="prodA${products[i].id}" type="text" style="width: 40px;" readonly value="1">
        <button class="btn btn-danger" onClick="addCount(innerText,value)"value="${products[i].id}">-</button>
        </div>
        <div style="display: flex;justify-content: center">
        <button class="btn btn-primary" onClick="addToCart(this.value,prodA${products[i].id}.value)" value="${products[i].id}">Add to Cart</button></div>
        </div>
    </div>`;
      }
    }
  } else {
    for (let i = 0; i < products.length; i++) {
      cardCon.innerHTML += `<div class="card" style="width: 18rem; margin: 2.5%;">
    <img class="card-img-top" style="height:200px;width:200px; align-self: center; padding-right: 20px"src="${products[i].picture}" alt="${products[i].description}">
    <div class="card-body">
    <h5 class="card-title" style="display: flex;justify-content: center">${products[i].name}</h5>
    <h6 class="card-title" style="display: flex;justify-content: center; color: green;"> ${products[i].price}$</h5>
    <p class="card-text"style="display: flex;justify-content: center">${products[i].description}</p>
    <div style="display: flex;justify-content: center">
    <button class="btn btn-success" onClick="addCount(innerText,value)"value="${products[i].id}">+</button>
    <input id="prodA${products[i].id}" type="text" style="width: 40px;" readonly value="1">
    <button class="btn btn-danger" onClick="addCount(innerText,value)"value="${products[i].id}">-</button>
    </div>
    <div style="display: flex;justify-content: center">
    <button class="btn btn-primary" onClick="addToCart(this.value,prodA${products[i].id}.value)" value="${products[i].id}">Add to Cart</button></div>
    </div>
</div>`;
    }
  }
}
if (indexCats > 0) {
  document.getElementById(`cat${categories[indexCats - 1].id}`).style =
    "background-color:blue";
} else {
  document.getElementById(`_Home`).style = "background-color:blue";
}
