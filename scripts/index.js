//DOm
let cart_items = [];
const cartdisplay = document.getElementById("cartContainer");
const MOVIEAPIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const MOVIEIMGPATH = "https://image.tmdb.org/t/p/w1280";
const select = document.getElementById("filter");
const chossen_items_element = document.getElementById("chossen_items");
let chossen_items = [];
let template = ``;
let users = [];
let logged = {};
const total_span = document.getElementById("total_span");
let logsection = document.getElementById("logsection");
let signsection = document.getElementById("signsection");
const secHeader = document.getElementById("secHeader");
const main = document.getElementById("main");
//EvenetListenrs

window.onload = () => {
  getusers();
};
select.addEventListener("change", (event) => {
  let sortterm = event.target.value;
  AppendAllItems(sortterm);
});

//functions

//user log in sign up
async function login(event) {
  event.preventDefault();
  let userName = document.getElementById("logUserName").value;
  let Password = document.getElementById("logPassword").value;
  users.map((user) => {
    if (user.userName === userName && user.Password === Password) {
      logged = user;
    }
  });
  if (logged === undefined) {
    alert("no matches");
    return;
  }
  if (logged.userName) {
    wellcome();
  } else {
    alert("no matches");
  }
  document.getElementById("logUserName").value = "";
  document.getElementById("logPassword").value = "";
  setconctedAccuont(userName, Password);
}
async function reguser(userName, Password) {
  fetch("http://localhost:3000/Users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName, Password }),
  });
}
function adduser(event) {
  event.preventDefault();
  let userName = document.getElementById("signUserName").value;
  let Password = document.getElementById("signPassword").value;
  let confirmPassWord = document.getElementById("confirmPassWord").value;
  if (Password === confirmPassWord) {
    reguser(userName, Password);
    logged = { userName, Password };
    document.getElementById("signUserName").value = "";
    document.getElementById("signPassword").value = "";
    document.getElementById("confirmPassWord").value = "";
    setconctedAccuont(userName, Password);
    wellcome();
  } else {
    alert("password not confirmed");
  }
}
async function setconctedAccuont(userName, Password) {
  let res = await fetch("http://localhost:3000/conctedAccuont");
  let con = await res.json();
  console.log(con);
  if (con.length !== 0) {
    con.forEach((i) => {
      fetch("http://localhost:3000/conctedAccuont/" + JSON.stringify(i.id), {
        method: "DELETE",
      }).catch((err) => console.log(err));
    });
  }
  fetch("http://localhost:3000/conctedAccuont", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName, Password }),
  }).catch((err) => {
    console.log(err);
  });
}
//albumob
async function getusers() {
  let res = await fetch("http://localhost:3000/Users");
  users = await res.json();
}
async function getalbumob() {
  let res = await fetch(" http://localhost:3000/cart");
  const albumob = await res.json();
  let c = 1;
  albumob.forEach((album) => {
    album.quan = 1;
    album.price = randomprice();

    cart_items.push(album);
    album.remaining = Math.ceil(Math.random() * 10);
  });
  displayAll();
  updatecartdispaly();
}

//movies
async function getmovies() {
  let res = await fetch(MOVIEAPIURL);
  const moviesob = await res.json();
  moviesob.results.forEach((movie) => {
    movie.cartId = 2;
    movie.price = randomprice();

    movie.quan = 1;
    cart_items.push(movie);
  });
  displayAll();
}
//pohotos
async function getpohtos() {
  let res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const pohtosob = await res.json();
  let counter = 1;
  pohtosob.forEach((element) => {
    if (counter < 10) {
      element.cartId = 1;
      element.price = randomprice();

      element.quan = 1;
      element.remaining = Math.ceil(Math.random() * 10);
      cart_items.push(element);
      counter++;
    }
  });
  displayAll();
}
//cart functions
function AppendAllItems(con) {
  switch (con) {
    case "all":
      displayAll();
      break;
    case "photos":
      displayphotos();
      break;
    case "albums":
      displayalbums();

      break;
    case "movies":
      displaymovies();
      break;
  }
}
function displayalbums() {
  template = `<h1>albums</h1>`;

  cart_items.forEach((item) => {
    if (item.cartId == 3) {
      template += `<div class="cart-item" id="${item.id}">
      <img src="${item.image}"/>
      <div class="info"><p>${item.name} </p><span>${item.price}$</span></div></div>
      `;
    }
    cartdisplay.innerHTML = template;
  });
}
function displayphotos() {
  template = `<h1>photos</h1>`;
  cart_items.forEach((item) => {
    if (item.cartId == 1) {
      template += `<div class="cart-item" id="${item.id}">
      <img src="${item.thumbnailUrl}"/>
      <div class="info"><p>${item.title}</p><span>${item.price}$</span></div></div>
      `;
    }
  });
  cartdisplay.innerHTML = template;
}
function displaymovies() {
  template = `<h1>movies</h1>`;
  cart_items.forEach((item) => {
    if (item.cartId == 2) {
      template += `<div class="cart-item" id="${item.id}">
      <img src="${MOVIEIMGPATH + item.poster_path}"/>
      <div class="info"><p>${item.title}</p><span>${
        item.price
      }$</span></div></div>
      `;
    }
  });
  cartdisplay.innerHTML = template;
}
function displayAll() {
  template = `<h1>All items</h1>`;
  let id = 1;
  cart_items.forEach((item) => {
    if (item.cartId == 2) {
      item.id = id;
      template += `<div class="cart-item" id="${id}">
            <img src="${MOVIEIMGPATH + item.poster_path}"/>
            <div class="info"><p>${item.title}</p><span>${
        item.price
      }$</span></div></div>
            `;

      id++;
    }
    if (item.cartId == 1) {
      item.id = id;
      template += `<div class="cart-item" id="${id}">
            <img src="${item.thumbnailUrl}"/>
            <div class="info"><p>${item.title}</p><span>${item.price}$</span></div></div>
            `;
      id++;
    }
    if (item.cartId == 3) {
      item.id = id;
      template += `<div class="cart-item" id="${id}">
            <img src="${item.image}"/>
            <div class="info"><p>${item.name} </p><span>${item.price}$</span></div></div>
            `;
      id++;
    }
    cartdisplay.innerHTML = template;
  });
}
function randomprice() {
  let price = Math.ceil(Math.random() * 600);
  return price;
}

function handeleclick(event) {
  let selecteditem = event.target.id;
  if (selecteditem != "cartContainer") {
    selecteditem = cart_items.filter((item) => item.id == event.target.id);
    addtocartarray(selecteditem[0]);
  }
}

function addtocartarray(selecteditem) {
  if (chossen_items.includes(selecteditem) === true) {
    let i = chossen_items.indexOf(selecteditem);
    updatequan(i);
  } else {
    chossen_items.push(selecteditem);
  }
  updatecartdispaly();
}

function updatequan(index) {
  let quan = chossen_items[index].quan;
  quan++;
  chossen_items[index].quan = quan;
}

function updatecartdispaly() {
  template = "";
  chossen_items.forEach((item) => {
    template += `
    <div class="cart-row" id="${item.id}">

    <div class="title">
    ${item.title}
    </div>

    <div class="button-contanier">
    <button class="button quan-input" type="button" onclick="this.parentNode.querySelector('[type=number]').stepDown();">
    -
    </button>
    <input type="number" name="number" min="0" max="100" class="quan-input" id="${item.id}_quanInput" value="${item.quan}">
    <button class="button quan-input" type="button" onclick="this.parentNode.querySelector('[type=number]').stepUp();">
    +
    </button>
    </div>

    <div class="price">
    
   ${item.price}$
    </div>
    <div class="delbutton"><i class="fas fa-times" aria-hidden="true"></i></div>
    </div>
    `;
  });
  calctotal();
  chossen_items_element.innerHTML = template;
}

function calctotal() {
  let total = 0;
  chossen_items.forEach((item) => {
    total += item.price * item.quan;
  });
  total_span.innerHTML = `${total}$`;
}
function handle(event) {
  let target = event.target;
  let i = target.parentElement;
  if (target.classList.contains("delbutton")) {
    i = chossen_items.indexOf(chossen_items.filter((x) => x.id == i.id));
    chossen_items.splice(i, 1);
    updatecartdispaly();
  }
  if (target.classList.contains("quan-input")) {
    let quanInpId = `${i.parentElement.id}_quanInput`;
    let quan = document.getElementById(quanInpId).value;
    if (quan == 0) {
      quan;
      chossen_items.splice(i, 1);
      updatecartdispaly();
      return;
    }
    i = chossen_items.filter((x) => x.id == i.parentElement.id);
    i = chossen_items.indexOf(i[0]);
    chossen_items[i].quan = quan;
    calctotal();
  }
}

function search(event) {
  event.preventDefault();
  let term = document.getElementById("searchTerm").value;
  let res = cart_items.filter((x) => x.title == term);
  res = res[0];
  console.log(res);
  template = "";
  if (res.cartId == 2) {
    template += `<div class="cart-item" id="${res.id}">
            <img src="${MOVIEIMGPATH + res.poster_path}"/>
            <div class="info"><p>${res.title}</p><span>${
      res.price
    }$</span></div></div>
            `;
  }
  if (res.cartId == 1) {
    template += `<div class="cart-item" id="${res.id}">
            <img src="${res.thumbnailUrl}"/>
            <div class="info"><p>${res.title}</p><span>${res.price}$</span></div></div>
            `;
  }
  if (res.cartId == 3) {
    template += `<div class="cart-item" id="${res.id}">
            <img src="${res.image}"/>
            <div class="info"><p>${res.name} </p><span>${res.price}$</span></div></div>
            `;
  }
  cartdisplay.innerHTML = template;
  document.getElementById("searchTerm").value = "";
}
function toggle(c) {
  if (c === "logsection") {
    logsection.style.display = "flex";
    signsection.style.display = "none";
  }
  if (c === "signsection") {
    logsection.style.display = "none";
    signsection.style.display = "flex";
  }
  if (c === "off") {
    signsection.style.display = "none";
    logsection.style.display = "none";
  }
}
function wellcome() {
  getpohtos();
  getalbumob();
  getmovies();
  toggle("off");
  secHeader.style.display = "flex";
  main.style.display = "flex";
  let profile = document.getElementById("profile");
  profile.innerHTML = `<div class="profile">${logged.userName}</div>`;
  document.body.style.background = "black";
}
function checkout() {
  if (chossen_items.length === 0) return;
  secHeader.style.display = "none";
  main.style.display = "none";
  toggle("off");
  template = "";

  template = `<h1>your order</h1><div class="orders">`;
  let total = 0;
  chossen_items.forEach((item) => {
    total += item.price * item.quan;
  });
  chossen_items.forEach((item) => {
    template += `
    <div class="item" id="${item.id}">
    <div class="title">
    ${item.title}
    </div>

    <div class="button-contanier">
    <button class="button quan-input" type="button" onclick="this.parentNode.querySelector('[type=number]').stepDown();">
    -
    </button>
    <input type="number" name="number" min="0" max="100" class="quan-input" id="${item.id}_quanInput" value="${item.quan}">
    <button class="button quan-input" type="button" onclick="this.parentNode.querySelector('[type=number]').stepUp();">
    +
    </button>
    </div>

    <div class="price">
    
   ${item.price}$
    </div>
    </div>
    `;
  });
  template += `</div><div class="total-container">total :<span id="total_span">${total}$</span></div></div>`;
  document.getElementById("ordersdisplay").innerHTML = template;

  setTimeout(function () {
    location.reload();
  }, 3000);
}
