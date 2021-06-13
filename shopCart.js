
let myProducts =[
    {BandNAME:"Breaking Benjamin",Amount: 1, AlbumNAME:"EMBER", PRICE:"49", IMG:"IMG/ember.jpg", STATUS:"Available", INCART:false, WISHLIST:false, RATE:"TOP"},
    {BandNAME:"Breaking Benjamin",Amount: 1, AlbumNAME:"Phobia", PRICE:"39", IMG:"IMG/Phobia.jpg", STATUS:"Available", INCART:false, WISHLIST:false, RATE:"Normal"},
    {BandNAME:"Breaking Benjamin",Amount: 1, AlbumNAME:"DEAR AGONY", PRICE:"49", IMG:"IMG/dear agony.jpg", STATUS:"Available", INCART:false, WISHLIST:false, RATE:"TOP"},
    {BandNAME:"Breaking Benjamin",Amount: 1, AlbumNAME:"Dark Before Dawn", PRICE:"49", IMG:"IMG/Dark Before Dawn.jpg", STATUS:"Available", INCART:false, WISHLIST:false, RATE:"Normal"},
    {BandNAME:"Breaking Benjamin",Amount: 1, AlbumNAME:"Aurora", PRICE:"49", IMG:"IMG/Aurora.jpg", STATUS:"Available", INCART:false, WISHLIST:false, RATE:"Normal"},
    {BandNAME:"Breaking Benjamin",Amount: 1, AlbumNAME:"We Are Not Alone", PRICE:"29", IMG:"IMG/We Are Not Alone.jpg", STATUS:"Available", INCART:false, WISHLIST:false, RATE:"Normal"},
    {BandNAME:"Muse",Amount: 1, AlbumNAME:"Simulation Theory", PRICE:"59", IMG:"IMG/Simulation Theory.jpg", STATUS:"Available", INCART:false, WISHLIST:false, RATE:"TOP"},
    {BandNAME:"Muse",Amount: 1, AlbumNAME:"Origin of Symmetry", PRICE:"49", IMG:"IMG/origin of symemtry.jpg", STATUS:"Available", INCART:false, WISHLIST:false, RATE:"TOP"},
    {BandNAME:"Muse",Amount: 1, AlbumNAME:"Drones", PRICE:"39", IMG:"IMG/Drones.jpg", STATUS:"Available", INCART:false, WISHLIST:false, RATE:"Normal"},
    {BandNAME:"Muse",Amount: 1, AlbumNAME:"the-2nd-law", PRICE:"49", IMG:"IMG/the-2nd-law.jpeg", STATUS:"Available", INCART:false, WISHLIST:false, RATE:"Normal"},
    
    
]
let totalPrice =0;
//geting the array from Local Storage and update the cart price
function getFromLocalStorage(){
  const arrayFromLoaclStorage = JSON.parse(localStorage.getItem("myArray"))
  //console.log(arrayFromLoaclStorage)
  if (arrayFromLoaclStorage !=null) {
    console.log(totalPrice)
    myProducts = arrayFromLoaclStorage
    for (let i = 0; i < myProducts.length; i++){
      if (myProducts[i].INCART == true) {
        totalPrice += parseInt(myProducts[i].PRICE)* parseInt(myProducts[i].Amount);
      }
    }
   
  }
}
//console.log(totalPrice);
getFromLocalStorage()

function Banddispaly(id){
  ProductsPrice.innerHTML = ''
  displayProducts.innerHTML =""
  for (let i = 0; i <myProducts.length; i++){
    if(id =="brekingBJbtn" && myProducts[i].BandNAME =="Breaking Benjamin"){
  BandImagHeader.innerHTML =`<div class="w3-display-container w3-container">
    <img src="IMG/band.jpg" style="width:100%">
    <div class="w3-display-topleft w3-text-white" style="padding:24px 48px">
      <h1 class="w3-jumbo w3-hide-small">Breaking Benjamin</h1>
      <h1 class="w3-hide-large w3-hide-medium">Breaking Benjamin</h1>
      <h1 class="w3-hide-small">ALL ALBUMS</h1>
      <p><a href="#displayProducts" class="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
        </div>
       </div>`
        displayProducts.innerHTML+=
      `<div>
        <div class="w3-col l3 s6" style="margin-bottom: 5px;">
          <div class="w3-container">
            <img src="${myProducts[i].IMG}" style="width:100%">
            <p style="text-align: center;">${myProducts[i].AlbumNAME}</p>
            <b>$${myProducts[i].PRICE}</b>
            <input type="number"  value= "${myProducts[i].Amount}" id="AmountProduct${i}" class = "w3-right" name="quantity" min="1" max="5"><br></br>
            <div class="d-grid gap-2">
            <button onclick="AddToCart(myProducts[${i}],id)" id="MyBtn${i}" class="btn btn-primary CardBtn">Add to    <i onclick="" class="fa fa-shopping-cart w3-margin-right"></i></button>
            <button onclick="AddToWishList(myProducts[${i}],id)" id="HeartBtn${i}" class="btn btn-warning CardBtn">Add to    <i onclick="" class="fa fa-heart w3-margin-right"></i></button>
            </div>
          </div>
          </div>
        </div>`}
        else if (id == "Musebtn" && myProducts[i].BandNAME =="Muse"){ 
        BandImagHeader.innerHTML =`<div class="w3-display-container w3-container" >
        <img src="IMG/Muse band.jpg" style="width:100%">
        <div class="w3-display-topleft w3-text-white" style="padding:24px 48px">
          <h1 class="w3-jumbo w3-hide-small">Muse</h1>
          <h1 class="w3-hide-large w3-hide-medium">Muse</h1>
          <h1 class="w3-hide-small">ALL ALBUMS</h1>
          <p><a href="#displayProducts" class="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
        </div>
      </div>`
      displayProducts.innerHTML+=
      `<div>
        <div class="w3-col l3 s6" style="margin-bottom: 5px;">
          <div class="w3-container">
            <img src="${myProducts[i].IMG}" style="width:100%">
            <p style="text-align: center;">${myProducts[i].AlbumNAME}</p>
            <b>$${myProducts[i].PRICE}</b>
            <input type="number"  value= "${myProducts[i].Amount}" id="AmountProduct${i}" class = "w3-right" name="quantity" min="1" max="5"><br></br>
            <div class="d-grid gap-2">
            <button onclick="AddToCart(myProducts[${i}],id)" id="MyBtn${i}" class="btn btn-primary CardBtn">Add to    <i onclick="" class="fa fa-shopping-cart w3-margin-right"></i></button>
            <button onclick="AddToWishList(myProducts[${i}],id))" id="HeartBtn${i}" class="btn btn-warning CardBtn">Add to    <i onclick="" class="fa fa-heart w3-margin-right"></i></button>
            </div>
          </div>
          </div>
        </div>`}
        else if (id =="home"&& myProducts[i].RATE == "TOP" ){
          BandImagHeader.innerHTML =`
          <img src="IMG/home.jpg" style="width:100%">
          <div class="w3-display-topleft w3-text-white" style="padding:24px 48px">
            <h1 class="w3-jumbo w3-hide-small">Live It. Rock It.</h1>
            <h1 class="w3-hide-large w3-hide-medium"></h1>
            <h1 class="w3-hide-small"></h1>
            <p><a href="#displayProducts" class="w3-button w3-black w3-padding-large w3-large">Are Top Productss</a></p>
        </div>`
        displayProducts.innerHTML+=
        `<div>
          <div class="w3-col l3 s6" style="margin-bottom: 5px;">
            <div class="w3-container">
              <img src="${myProducts[i].IMG}" style="width:100%">
              <p style="text-align: center;">${myProducts[i].AlbumNAME}</p>
              <b>$${myProducts[i].PRICE}</b>
              <input type="number"  value= "${myProducts[i].Amount}" id="AmountProduct${i}" class = "w3-right" name="quantity" min="1" max="5"><br></br>  
              <div class="d-grid gap-2">
              <button onclick="AddToCart(myProducts[${i}],id)" id="MyBtn${i}" class="btn btn-primary CardBtn">Add to    <i onclick="" class="fa fa-shopping-cart w3-margin-right"></i></button>
              <button onclick="AddToWishList(myProducts[${i}],id))" id="HeartBtn${i}" class="btn btn-warning CardBtn">Add to    <i onclick="" class="fa fa-heart w3-margin-right"></i></button>
              </div>
            </div>
            </div>
          </div>`} 
         }
         CheckCart()
        }
      
    
function displayHome(){
  // ProductsPrice.innerHTML = ''
for (let i = 0; i <myProducts.length; i++){
  if (myProducts[i].RATE == "TOP"){
  BandImagHeader.innerHTML =`
  <img src="IMG/home.jpg" style="width:100%">
  <div class="w3-display-topleft w3-text-white" style="padding:24px 48px">
    <h1 class="w3-jumbo w3-hide-small">Live It. Rock It.</h1>
    <h1 class="w3-hide-large w3-hide-medium"></h1>
    <h1 class="w3-hide-small"></h1>
    <p><a href="#displayProducts" class="w3-button w3-black w3-padding-large w3-large">Are Top Productss</a></p>
</div>`
displayProducts.innerHTML+=
`<div>
  <div class="w3-col l3 s6" style="margin-bottom: 5px;">
    <div class="w3-container">
      <img src="${myProducts[i].IMG}" style="width:100%">
      <p style="text-align: center;">${myProducts[i].AlbumNAME}</p>
      <b>$${myProducts[i].PRICE}</b>
      <input type="number"  value= "${myProducts[i].Amount}" id="AmountProduct${i}" class = "w3-right" name="quantity" min="1" max="5"><br></br>
      <div class="d-grid gap-2">
      <button onclick="AddToCart(myProducts[${i}],id)" id="MyBtn${i}" class="btn btn-primary CardBtn">Add to    <i onclick="" class="fa fa-shopping-cart w3-margin-right"></i></button>
      <button onclick="AddToWishList(myProducts[${i}],id)" id="HeartBtn${i}" class="btn btn-warning CardBtn">Add to    <i onclick="" class="fa fa-heart w3-margin-right"></i></button>
      </div>
    </div>
    </div>
  </div>`}
  
}
CheckCart()
}

function search(){
  displayProducts.innerHTML =""
  for (let i = 0; i <myProducts.length; i++){
    if(myProducts[i].AlbumNAME == Search.value){
    displayProducts.innerHTML =
    `<div>
      <div class="w3-col l3 s6" style="margin-bottom: 5px;">
        <div class="w3-container">
          <img src="${myProducts[i].IMG}" style="width:100%">
          <p style="text-align: center;">${myProducts[i].AlbumNAME}</p>
          <b>$${myProducts[i].PRICE}</b>
          <input type="number"  value= "${myProducts[i].Amount}" id="AmountProduct${i}" class = "w3-right" name="quantity" min="1" max="5"><br></br>
          <div class="d-grid gap-2">
          <button onclick="AddToCart(myProducts[${i}],id)" id="MyBtn${i}" class="btn btn-primary CardBtn">Add to    <i onclick="" class="fa fa-shopping-cart w3-margin-right"></i></button>
          <button onclick="AddToWishList(myProducts[${i}],id)" id="HeartBtn${i}" class="btn btn-warning CardBtn">Add to    <i onclick="" class="fa fa-heart w3-margin-right"></i></button>
          </div>
        </div>
      </div>`
 }}
CheckCart()
}
function AddToCart(obj,id){ 
  for (let i = 0; i < myProducts.length; i++){
  if(myProducts[i] === obj){
    obj.INCART = true;
    totalPrice += parseInt(myProducts[i].PRICE);
    cartIcon.style.color =" red"
    obj.Amount = (document.getElementById(`AmountProduct${i}`).value);
    localStorage.setItem('myArray',JSON.stringify(myProducts));
    // console.log(myProducts[i].Amount);
    // console.log(myProducts[i]);
    //console.log(totalPrice)    
    //console.log(document.getElementById(`AmountProduct${i}`).value);

  }
  }
    let thisBtn = document.getElementById(id);
    console.log(thisBtn);
    thisBtn.classList.add(`btn`);
    thisBtn.classList.add(`btn-success`);
    thisBtn.innerText=`Added`
    thisBtn.onclick=''
}

function AddToWishList(obj,id){
  for (let i = 0; i < myProducts.length; i++){
    if(myProducts[i] === obj){
      obj.WISHLIST = true;
      HeartIcon.style.color ="red"
      localStorage.setItem('myArray',JSON.stringify(myProducts));
     // console.log(myProducts[i]);
    }}
    let thisBtn = document.getElementById(id);
    console.log(thisBtn);
    thisBtn.classList.add('fa')
    thisBtn.classList.add('fa-heart')
    thisBtn.classList.add(`btn`);
    thisBtn.classList.add(`btn-danger`);
    thisBtn.innerText=` Added`
    thisBtn.onclick=''

}

function displayCart(){
  let sumTotalPrice =0;
  displayProducts.innerHTML =""
  BandImagHeader.innerHTML =`
  <img src="IMG/rock cart.jpg" style="width:100%">
  <div class="w3-display-topleft w3-text-white" style="padding:24px 48px">
    <h1 class="w3-jumbo w3-hide-small">My Rock Cart</h1>
    <h1 class="w3-hide-large w3-hide-medium"></h1>
    <h1 class="w3-hide-small"></h1>
    <p><a href="#displayProducts" class="w3-button w3-black w3-padding-large w3-large">Check cart</a></p>
</div>`

for (let i = 0; i <myProducts.length; i++){
  if(myProducts[i].INCART == true){
    sumTotalPrice += myProducts[i].PRICE * myProducts[i].Amount
    displayProducts.innerHTML +=
    `<div>
      <div class="w3-col l3 s6" style="margin-bottom: 5px;">
        <div class="w3-container">
          <img src="${myProducts[i].IMG}" style="width:100%">
          <p style="text-align: center;">${myProducts[i].AlbumNAME}</p>
          <b id = totalNum>$${myProducts[i].PRICE*myProducts[i].Amount}</b>
          <input  type="text" value="${myProducts[i].Amount}" id="AmountProduct${i}" class = "w3-right Amount" name="quantity" min="1" max="5" disabled ><br></br>
          <div class="d-grid gap-2">
          <button onclick="removeFromCart([${i}])" id="MyBtn${i}" class="btn btn-danger">remove from  <i onclick="" class="fa fa-shopping-cart w3-margin-right"></i></button>
          </div>
        </div>
      </div>`
      ProductsPrice.innerHTML = 
       `<h3>final price:$${sumTotalPrice}</h3>
       <button onclick="document.getElementById('CheckOut box').style.display='block'" class="btn btn-primary CardBtn">Ready to check out?</button> </h3>
      <button onclick="Banddispaly(this.id)" id ="home" class="btn btn-danger CardBtn">return Home</button><br></br> `   
      //console.log(totalPrice)

}}}

function displayWhisList(){
  displayProducts.innerHTML =""
  BandImagHeader.innerHTML =`
  <img src="IMG/wish.jpg" style="width:100%">
  <div class="w3-display-topleft w3-text-white" style="padding:24px 48px">
    <h1 class="w3-jumbo w3-hide-small">Wishes are meant to come true</h1>
    <h1 class="w3-hide-large w3-hide-medium"></h1>
    <h1 class="w3-hide-small"></h1>
    <p><a href="#displayProducts" class="w3-button w3-black w3-padding-large w3-large">Check Whis List</a></p>
</div>`
for (let i = 0; i <myProducts.length; i++){
  if(myProducts[i].WISHLIST == true){
    displayProducts.innerHTML +=
    `<div>
      <div class="w3-col l3 s6" style="margin-bottom: 5px;">
        <div class="w3-container">
          <img src="${myProducts[i].IMG}" style="width:100%">
          <p style="text-align: center;">${myProducts[i].AlbumNAME}</p>
          <b id = totalNum>$${myProducts[i].PRICE*myProducts[i].Amount}</b>
          <input  type="text" value="${myProducts[i].Amount}" id="AmountProduct${i}" class = "w3-right Amount" name="quantity" min="1" max="5" disabled ><br></br>
          <div class="d-grid gap-2">
          <button onclick="removeFromWhishList([${i}])" id="HeartBtn${i}" class="btn btn-dark CardBtn">Remove from   <i onclick="" class="fa fa-heart w3-margin-right"></i></button>          </div>
        </div>
      </div>`
}
}
}
// removing product from cart
function removeFromCart(i) {
  totalPrice -= parseInt(myProducts[i].PRICE);
  myProducts[i].INCART = false
  localStorage.setItem('myArray',JSON.stringify(myProducts));
  ProductsPrice.innerHTML = `<h3>final price:$${totalPrice}</h3>`
  //console.log(i);
  displayCart()
    if (myProducts[i].INCART == false) {
      cartIcon.style.color =''
      myProducts[i].Amount = 1;
  }
}
// removing product from WishList
function removeFromWhishList(i) {
  myProducts[i].WISHLIST = false
  localStorage.setItem('myArray',JSON.stringify(myProducts));
  displayWhisList()
    if (myProducts[i].WISHLIST == false) {
      HeartIcon.style.color =''
  }
}
// check if products is alredy in the cart
function CheckCart() {
  for (let i = 0; i < myProducts.length; i++){
  if(myProducts[i].INCART ==true){
      let thisBtn = document.getElementById(`MyBtn${i}`);
      thisBtn.classList.add(`btn`);
      thisBtn.classList.add(`btn-success`);
      thisBtn.innerText=`added`;
      cartIcon.style.color ="red"
}
if (myProducts[i].WISHLIST == true){
  let thisBtn = document.getElementById(`HeartBtn${i}`);
  //console.log(thisBtn);
  thisBtn.classList.add('fa')
  thisBtn.classList.add('fa-heart')
  thisBtn.classList.add(`btn`);
  thisBtn.classList.add(`btn-danger`);
  thisBtn.innerText=` Added`
  thisBtn.onclick=''
  HeartIcon.style.color ='red'
}
}
}
// Open and close sidebar in phone mode
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}