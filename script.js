//Start product array//
const productArray = [
  {
    id: 1,
    productName: "TPR Rope Twisted Ball S",
    class: "Cat",
    price: "20",
    images: "images/toy1.jpg",
  },
  {
    id: 2,
    productName: "Bed For Dog ",
    class: "Dog",
    price: "180",
    images: "images/DogBed.png",
  },
  {
    id: 3,
    productName: "Bag stogo ",
    class: "Dog",
    price: "20",
    images: "images/Bagstogo.jpg",
  },
  {
    id: 4,
    productName: "Dog food bowl ",
    class: "Dog",
    price: "60",
    images: "images/Dog foodbowl.jpg",
  },
  {
    id: 5,
    productName: "Orthopedic mattress ",
    class: "Dog",
    price: "60",
    images: "images/FerplastRelax.jpg",
  },
  {
    id: 6,
    productName: "Dog leash",
    class: "Dog",
    price: "40",
    images: "images/FLEXIClassicLred.jpg",
  },
  {
    id: 7,
    productName: "cat collar ",
    class: "Cat",
    price: "30",
    images: "images/vintage_cat.jpg",
  },
  {
    id: 8,
    productName: "water fountain",
    class: "Cat",
    price: "85",
    images: "images/water fountain.jpg",
  },
];

//END product array//

function displayProduct() {
  const productContainer = document.getElementById(`displayProduct`);
  const params = new URLSearchParams(window.location.search);
  const _class = params.get("category");
  const filterProduct = productArray.filter(function (product) {
    if (product.class === _class) {
      return true;
    }
    return false;
  });

  for (let i = 0; i < filterProduct.length; i++) {
    const product = filterProduct[i];
    const html = ` <div class="col-md-3 col-sm-6">
    <div class="product-grid">
      <div class="product-image">
        <img href="#" class="image" src="${product.images}" /></img>
      </div>
      <div class="product-content">
        <h3 class="title"><a href="#">${product.productName}</a></h3>
        <div class="price">₪${product.price}</div>
        <button class="add-to-cart" href="#" data-id ="${product.id}"
          ><i class="fas fa-shopping-bag"></i> הוספה לסל</button
        >
      </div>
    </div>
  </div>`;
    productContainer.innerHTML += html;
  }
}

// מחיקה של מוצרים על ידי הכפתור
function remove() {
  var removeCartItemButtons = document.getElementsByClassName("btn-danger");
  console.log(removeCartItemButtons);
  for (let i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", function (event) {
      var buttonClicked = event.target;
      buttonClicked.parentElement.parentElement.remove();
      const productId = buttonClicked.getAttribute("data-id");
      localCart = localCart.filter((p) => p.id !== +productId);
      saveToLocalStorage();
      updateCartTotal();
    });
  }
}

// מעדכן את המחיר בעגלה
function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = priceElement.innerText.replace("₪", "");
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  // מעגל את המספר בחישוב Math.round
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerHTML =
    "₪" + total;
}

var quantityInputs = document.getElementsByClassName("cart-quantity-input");
for (let i = 0; i < quantityInputs.length; i++) {
  var input = quantityInputs[i];
  input.addEventListener("change", quantityChanged);
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

//כפתור הוספה לסל מקבל כותרת,מחיר,ותמונה
function addToCartClicked(event) {
  var button = event.target;
  const id = button.getAttribute("data-id");
  //const product = productArray.find((p) => p.id === +id);
  const product = productArray.find(function (product) {
    return product.id === +id;
  });
  localCart.push(product);
  saveToLocalStorage();
  var shoptItem = button.parentElement.parentElement;
  var title = shoptItem.getElementsByClassName("title")[0].innerText;
  var price = shoptItem.getElementsByClassName("price")[0].innerText;
  var imageSrc = shoptItem.getElementsByClassName("image")[0].src;
  console.log(title, price, imageSrc);
  addItemToCart(id, title, price, imageSrc);
  updateCartTotal();
}

let localCart = [];
function loagStorage() {
  const array = localStorage.getItem("saveCart");
  if (array) {
    localCart = JSON.parse(array);
    for (let i = 0; i < localCart.length; i++) {
      const Product = localCart[i];
      if (Product) {
        addItemToCart(
          Product.id,
          Product.productName,
          Product.price,
          Product.images
        );
        updateCartTotal();
      }
    }
  }
}

function saveToLocalStorage() {
  localStorage.setItem("saveCart", JSON.stringify(localCart));
}

//כפתור הוספה לסל מוסיף את הפריטים לסל הקניות
function addItemToCart(productId, title, price, imageSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  cartRow.innerHTML = title;
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartItemName = cartItems.getElementsByClassName("cart-item-title");
  for (let i = 0; i < cartItemName.length; i++) {
    if (cartItemName[i].innerText == title) {
      alert("המוצר כבר נמצא בעגלת הקניות");
      return;
    }
  }

  var cartRowsContents = `<div class="cart-item cart-column">
  <img
    class="cart-item-image"
    src="${imageSrc}"
    width="100"
    height="100"
  />
  <span class="cart-item-title">${title}</span>
</div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
  <input class="cart-quantity-input" type="number" value="1" />
  <button class="btn btn-danger" type="button" data-id=${productId}>REMOVE</button>
</div>`;
  cartRow.innerHTML = cartRowsContents;
  cartItems.append(cartRow);
  quantityChanged({ target: cartRow });
  remove();
  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (let i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
}
displayProduct();
//אירוע הפעלת כפתור הוספה לסל
let addToCartButtons = document.getElementsByClassName("add-to-cart");
for (let i = 0; i < addToCartButtons.length; i++) {
  var button = addToCartButtons[i];
  button.addEventListener("click", addToCartClicked);
}
loagStorage();
