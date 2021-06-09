

let shopData = [
  { id: 1, cat: 1, price: 40, name: "Meat" },
  { id: 2, cat: 1, price: 55, name: "Turkey"},
  { id: 3, cat: 1, price: 100, name: "Steak"},
  { id: 4, cat: 1, price: 11, name: "Chicken"},
  { id: 5, cat: 1, price: 63, name: "Sausage"},
  { id: 6, cat: 1, price: 30, name: "Shrimp"},
  { id: 7, cat: 1, price: 1, name: "Tuna"},
  { id: 8, cat: 1, price: 5, name: "Fish"},
  { id: 9, cat: 1, price: 67, name: "Pork"},
  { id: 10, cat: 1, price: 53, name: "Bacon"},

  { id: 11, cat: 2, price: 5, name: "Apple"},
  { id: 12, cat: 2, price: 6, name: "Lemon"},
  { id: 13, cat: 2, price: 5, name: "Orange"},
  { id: 14, cat: 2, price: 7, name: "Peach"},
  { id: 15, cat: 2, price: 4, name: "Corn"},
  { id: 16, cat: 2, price: 16, name: "Watermelon"},
  { id: 17, cat: 2, price: 20, name: "Guava"},
  { id: 18, cat: 2, price: 25, name: "Coconut"},
  { id: 19, cat: 2, price: 40, name: "Banana"},
  { id: 20, cat: 2, price: 52, name: "Grapes"},

  { id: 21, cat: 3, price: 10, name: "Milk"},
  { id: 22, cat: 3, price: 25, name: "Cheese"},
  { id: 23, cat: 3, price: 15, name: "Chocolate"},
  { id: 24, cat: 3, price: 30, name: "Cake"},
  { id: 25, cat: 3, price: 25, name: "Goat Milk"},
  { id: 26, cat: 3, price: 17, name: "Shoko"},
  { id: 27, cat: 3, price: 60, name: "Cheesecake"},
  { id: 28, cat: 3, price: 20, name: "Yogurt"},
  { id: 29, cat: 3, price: 5, name: "Popsicle"},
  { id: 30, cat: 3, price: 30, name: "Cheddar"},


]

let myCart = {
  cost : 0,
  cart : [],
  index : 0
}

function checkOut(){
  alert(`PRICE: ${myCart.cost}
ITEMS: ${myCart.cart}`)
  location.reload();
}

function addToCart(prodID,prodPrice){
  myCart.cart.push(prodID)
  myCart.cost += prodPrice
  TotalCost.innerHTML = myCart.cost
  shoppingCart.innerHTML += `
  <li id="card${myCart.index}" class="cart-container list-group-item">
      <div class="card  alert-light">
      <img src="imgs/${prodID}.gif">
        <div class="card-title">
          ${shopData[prodID-1].name}
        </div>
        <div class="card-subtitle">
          Cost: ${prodPrice}
        </div>
        <button onclick="removeCard(${myCart.index},${prodPrice})" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i> REMOVE</button>
      </div>
    </li>
  `
  myCart.index++
  
}

function removeCard(_cardID,minusPrice){
  console.log(minusPrice)
  document.getElementById(`card${_cardID}`).remove();
  myCart.cost -= minusPrice
  TotalCost.innerHTML = myCart.cost

}

function displayItems(_num) {
  document.getElementById("display").innerHTML = ""
  for (let index = 0; index < shopData.length; index++) {
    if (shopData[index].cat == _num) {
      display.innerHTML += `<div class=" align-items-start">
      <div class="card col-sm" >
        
        <div class="card  alert-light">
        <img src="imgs/${shopData[index].id}.gif">
          <div class="card-title">
            ${shopData[index].name}
          </div>
          <div class="card-subtitle">
            Price: ${shopData[index].price}
          </div>
          <br>
          <button onclick="addToCart(${shopData[index].id},${shopData[index].price})" class="btn btn-success btn-sm">Add to cart</button>
        </div>
      </div>`
       
    }

  }

}
// <img class="card-img-top" src="https://picsum.photos/50" alt="Card image cap">