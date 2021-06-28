// category arrays
let necklaces = [
  {
    id: "BlueHeartNecklace",
    cat: "necklaces",
    price: 25,
    name: "Blue Heart Necklace",
    img: "images/custom_jewlery/necklaces/61-t5HCxAEL._AC_UL480_QL65_.jpg",
    orders: 0,
  },
  {
    id: "BlueTileNecklace",
    cat: "necklaces",
    price: 14,
    name: "Blue Tile Necklace",
    img: "images/custom_jewlery/necklaces/71pYceJZEgL._AC_UL480_QL65_.jpg",
    orders: 0,
  },
  {
    id: "GreenPearNecklace",
    cat: "necklaces",
    price: 32,
    name: "Green Pear Necklace",
    img: "images/custom_jewlery/necklaces/61BHPeEKb7L._AC_UL480_QL65_.jpg",
    orders: 0,
  },
];
let bracelets = [
  {
    id: "CostumeBraceletWithGems",
    cat: "bracelets",
    price: 11,
    name: "Costume Bracelet With Gems",
    img: "images/custom_jewlery/bracelets/25245955-top-view-of-a-costume-jewelry-bracelet-with-fake-gemstones-on-a-white-background.jpg",
    orders: 0,
  },
  {
    id: "GoldLinkBracelet",
    cat: "bracelets",
    price: 52,
    name: "Gold Link Bracelet",
    img: "images/custom_jewlery/bracelets/611LnL2uBHL._AC_UL1500_.jpg",
    orders: 0,
  },
  {
    id: "SilverXBracelet",
    cat: "bracelets",
    price: 41,
    name: "Silver X Bracelet",
    img: "images/custom_jewlery/bracelets/61A2hPlAeTL._AC_UL480_QL65_.jpg",
    orders: 0,
  },
];

var rings = [
  {
    id: "RingWithOrangeStone",
    class: "rings",
    price: 32,
    name: "Ring With Orange Stone",
    img: "images/custom_jewlery/rings/61tA9gxaxhL._AC_UY395_.jpg",
    orders: 0,
  },
  {
    id: "BlueGreenOvalStoneRing",
    class: "rings",
    price: 13,
    name: "Blue Green Oval Stone Ring",
    img: "images/custom_jewlery/rings/blue_green_oval_stone.jpg",
    orders: 0,
  },
  {
    id: "Plated Birthstone Ring",
    class: "rings",
    price: 42,
    name: "Plated Birthstone Ring",
    img: "images/custom_jewlery/rings/plated_birthstone.jpg",
    orders: 0,
  },
];
// this function causes the items in the necklace array to show up on the screen (display)
let necklace = [];
function showNecklaces() {
  display.innerHTML = "";
  for (let index = 0; index < necklaces.length; index++) {
    necklace[index] = necklaces[index];
    display.innerHTML += `<div ${necklaces[index].name}>
            ${necklaces[index].name}  , ${necklaces[index].price} ,  
            <img src="${necklaces[index].img}"></div>
            <button class="btnss" onclick='add(necklace[${index}])'> Add to cart</button> 
            `;
  }
}
// this function causes the items in the bracelet array to show up on the screen (display)
let bracelet = [];
function showBracelets() {
  display.innerHTML = "";
  for (let index = 0; index < bracelets.length; index++) {
   bracelet[index] = bracelets[index];
    display.innerHTML += `<div ${bracelets[index].name}>
            ${bracelets[index].name}  , ${bracelets[index].price} ,  
            <img src="${bracelets[index].img}"></div>
            <button class="btnss" onclick='add(bracelet[${index}])'> Add to cart</button>  
            `;
  }
}
// this function causes the items in the ring array to show up on the screen (display)
let ring = [];
function showRings() {
  display.innerHTML = "";
  for (let index = 0; index < rings.length; index++) {
    ring[index] = rings[index]
    display.innerHTML += `<div ${rings[index].name}>
            ${rings[index].name}  , ${rings[index].price} ,  
            <img src="${rings[index].img}"></div>
            <button class="btnss" onclick='add(ring[${index}])'>Add to cart</button> 
            `;
  }
}
// this function adds the selected product into the shopping cart
let cart = [];
function add(product) {
    console.log(product)
  cart.push(product);
}
// this function causes the items in the cart to show up on the screen (display)
let tot
function showCart() {
  display.innerHTML = "";
  for (let index = 0; index < cart.length; index++) {
      tot = cart[index]
    display.innerHTML += `<div ${cart[index].name}>
    <button class="bttns" onClick='remove(${index})'>Remove</button>
        ${cart[index].name}  , ${cart[index].price} ,
        <img src="${cart[index].img}"></div>`
  }
}
// this function calculates the total cost of all the products in the shopping cart
function total(price) {
  display.innerHTML = "";
  let sum = 0;
  for (let index = 0; index < cart.length; index++) {
    sum += (cart[index].price)
    display.innerHTML = "$" + sum
  }
  }
// this function removes the selected product from the shopping cart
function remove(id) {
  cart.splice(id, 1)
  showCart()
}
