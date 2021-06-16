

let shopData = [
  { id: 1, cat: 1, price: 60, name: "Meat" },
  { id: 2, cat: 1, price: 55, name: "Turkey" },
  { id: 3, cat: 1, price: 100, name: "Steak" },
  { id: 4, cat: 1, price: 45, name: "Chicken" },
  { id: 5, cat: 1, price: 35, name: "Sausage" },
  { id: 6, cat: 1, price: 30, name: "Shrimp" },
  { id: 7, cat: 1, price: 1, name: "Tuna" },
  { id: 8, cat: 1, price: 5, name: "Fish" },
  { id: 9, cat: 1, price: 57, name: "Pork" },
  { id: 10, cat: 1, price: 33, name: "Bacon" },

  { id: 11, cat: 2, price: 15, name: "Apple" },
  { id: 12, cat: 2, price: 9, name: "Lemon" },
  { id: 13, cat: 2, price: 15, name: "Orange" },
  { id: 14, cat: 2, price: 17, name: "Peach" },
  { id: 15, cat: 2, price: 6, name: "Corn" },
  { id: 16, cat: 2, price: 30, name: "Watermelon" },
  { id: 17, cat: 2, price: 20, name: "Guava" },
  { id: 18, cat: 2, price: 25, name: "Coconut" },
  { id: 19, cat: 2, price: 20, name: "Banana" },
  { id: 20, cat: 2, price: 22, name: "Grapes" },

  { id: 21, cat: 3, price: 10, name: "Milk" },
  { id: 22, cat: 3, price: 25, name: "Cheese" },
  { id: 23, cat: 3, price: 15, name: "Chocolate" },
  { id: 24, cat: 3, price: 30, name: "Cake" },
  { id: 25, cat: 3, price: 25, name: "Goat Milk" },
  { id: 26, cat: 3, price: 17, name: "Shoko" },
  { id: 27, cat: 3, price: 60, name: "Cheesecake" },
  { id: 28, cat: 3, price: 20, name: "Yogurt" },
  { id: 29, cat: 3, price: 5, name: "Popsicle" },
  { id: 30, cat: 3, price: 30, name: "Cheddar" },

  { id: 31, cat: 4, price: 20, name: "Cider" },
  { id: 32, cat: 4, price: 10, name: "Grape Juice" },
  { id: 33, cat: 4, price: 15, name: "Ice Cream Pop" },
  { id: 34, cat: 4, price: 10, name: "Orange Juice" },
  { id: 35, cat: 4, price: 10, name: "Mineral Water" },
  { id: 36, cat: 4, price: 20, name: "Mango Nectar" },
  { id: 37, cat: 4, price: 10, name: "Fanta" },
  { id: 38, cat: 4, price: 10, name: "Sprite" },
  { id: 39, cat: 4, price: 100, name: "Whiskey" },
  { id: 40, cat: 4, price: 100, name: "Sake" },
  { id: 41, cat: 4, price: 70, name: "Vodka" },

  // cat 2
  { id: 42, cat: 2, price: 4, name: "Onion" },
  { id: 43, cat: 2, price: 22, name: "Spinach" },
  { id: 44, cat: 2, price: 24, name: "Cherry Tomato" },
  { id: 45, cat: 2, price: 8, name: "Garlic" },
  { id: 46, cat: 2, price: 13, name: "Cucumber" },
  { id: 47, cat: 2, price: 15, name: "Ginger" },
  { id: 48, cat: 2, price: 11, name: "Carrot" },
  { id: 49, cat: 2, price: 20, name: "Mushrooms" },
  { id: 50, cat: 2, price: 27, name: "Pineapple" },
  { id: 51, cat: 2, price: 23, name: "Pumpkin" },
  { id: 52, cat: 2, price: 19, name: "Kiwi" },

  // cat 1
  { id: 53, cat: 1, price: 48, name: "Ham" },
  { id: 54, cat: 1, price: 30, name: "Fried Chicken" },
  { id: 55, cat: 1, price: 90, name: "Beef" },

  // cat 4
  { id: 56, cat: 4, price: 10, name: "Coke" },
  { id: 57, cat: 4, price: 10, name: "Diet Coke" },
  { id: 58, cat: 4, price: 10, name: "Pepsi" },
  { id: 59, cat: 4, price: 12, name: "Coca-Cola" },
  { id: 60, cat: 4, price: 15, name: "Beer" },
  { id: 61, cat: 4, price: 10, name: "Peach Juice" },
  { id: 62, cat: 4, price: 14, name: "Carrot Juice" },
  { id: 63, cat: 4, price: 14, name: "Berry Juice" },
]



const currency = `💰`
// ` <img class="currency" style="width: 20px; height: 20px; float: none;
// margin-left:none;" src=./imgs/surplus.png height="10"/>`

let myCart = {
  cost: 0,
  cart: [],
  index: 0
}

function updateCartPrice(){
  TotalCost.innerHTML = myCart.cost + currency;
}

$( document ).ready(function() {
  updateCartPrice();
  // displayItems(1)
});

function checkOut() {
  if (myCart.cost > 0) {
    let removeItem = 0;
    myCart.cart = jQuery.grep(myCart.cart, function (value) {
      return value != removeItem;
    });
    let itemsList = "ITEMS:\n"
for (let index = 0; index < myCart.cart.length; index++) {
  itemsList += shopData[myCart.cart[index]-1].name
  if(index+1<myCart.cart.length){itemsList += '\n'}
  // 
  if(myCart.cart[0] == 16 && myCart.cart[1] == 11 && myCart.cart[2] == 21 && myCart.cart.length == 3){
    itemsList = 'daSecret'
  } 
  
}
    alert(`PRICE: ${myCart.cost + currency}
${itemsList}`)
    location.reload();
  } else { alert(`Cart is empty`) }
}

function addToCart(prodID, prodPrice) {
  goodToast(`${shopData[prodID-1].name} added to cart`)
  myCart.cart.push(prodID)
  myCart.cost += prodPrice
  updateCartPrice();
  shoppingCart.innerHTML += `
  <li id="card${myCart.index}" class="cart-container list-group-item">
      <div class="card  alert-light">
      <img src="imgs/${prodID}.gif">
        <div class="card-title">
          ${shopData[prodID - 1].name}
        </div>
        <div class="card-subtitle">
          Cost: ${prodPrice}${currency}
        </div>
        <button onclick="removeCard(${myCart.index},${prodPrice},${prodID})" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i> REMOVE</button>
      </div>
    </li>
  `
  cartItems.innerText++
  myCart.index++
  console.log(myCart.cart)
  console.log(myCart.cart.length)

}

function removeCard(_cardID, minusPrice, _prodID) {
  myCart.cart.splice(_cardID, 1, 0)
  document.getElementById(`card${_cardID}`).remove();

  myCart.cost -= minusPrice
  updateCartPrice();
  cartItems.innerText--
  if(cartItems.innerText == "0"){cartItems.innerText = ""}
  badToast(`${shopData[_prodID-1].name} removed from cart`)
  console.log(myCart.cart)


}

function displayItems(_num) {
  display.innerHTML = ""
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
            Price: ${shopData[index].price}${currency}
          </div>
          <br>
          <button onclick="addToCart(${shopData[index].id},${shopData[index].price})" class="btn btn-success btn-sm">Add to cart</button>
        </div>
      </div>`

    }

  }

}
function goodToast(_message) {
  Toastify({
    text: _message,
    gravity: "top",
    position: "center",
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
  }).showToast();
}
function badToast(_message) {
  Toastify({
    text: _message,
    gravity: "top",
    position: "center",
    backgroundColor: "linear-gradient(to right, #f35e00, #ff1e00)",
  }).showToast();
}
