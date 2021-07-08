src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"


const itemlist = [
    {id :"1", name : "apple pie" , category : "dessert" , price : 200  , imgSrc : "images/desserts/apple-pie.jpg"},
    {id :"2", name : "carrot cake " , category : "dessert" ,  price : 90 ,  imgSrc : "images/desserts/carrot-cake.jpg" },
    {id :"3", name : "choclate cake" , category : "dessert" , price : 120  , imgSrc : "images/desserts/choclate-cake.jpg"},
    {id :"4", name : "choclate mint cake" , category : "dessert" , price : 300  , imgSrc : "images/desserts/choclate-mint-cake.jpg"},
    {id :"5", name : "choclate strawberry" , category : "dessert" , price : 500  , imgSrc : "images/desserts/choclate-strawberry.jpg"},
    {id :"6", name : "dounuts" , category : "dessert" , price : 60  , imgSrc : "images/desserts/dounuts.jpg"},
    {id :"7", name : "frosted cake" , category : "dessert" , price : 80  , imgSrc : "images/desserts/frosted-cake.jpg"},
    {id :"8", name : "macaroons" , category : "dessert" , price : 110  , imgSrc : "images/desserts/macaroons.jpg"},
    {id :"9", name : "molten cake" , category : "dessert" , price : 130  , imgSrc : "images/desserts/molten-cake.jpg"},

    { name : "Camembert cheese" , category : "dairy" , price : 100  , imgSrc : "images/dairy/Camembert-cheese.jpg"},
    { name : "Cheese wheel" , category : "dairy" , price : 100  , imgSrc : "images/dairy/Cheese-wheel.jpg"},
    { name : "choco milk" , category : "dairy" , price : 100  , imgSrc : "images/dairy/choco-milk.jpg"},
    { name : "eggs" , category : "dairy" , price : 100  , imgSrc : "images/dairy/eggs.jpg"},
    { name : "milk" , category : "dairy" , price : 100  , imgSrc : "images/dairy/milk.jpg"},
    { name : "Mozzarella Cheese" , category : "dairy" , price : 100  , imgSrc : "images/dairy/Mozzarella-Cheese.jpg"},
    { name : "strawberry-moouse" , category : "dairy" , price : 100  , imgSrc : "images/dairy/strawberry-moouse.jpg"},
    { name : "swiss cheese" , category : "dairy" , price : 100  , imgSrc : "images/dairy/swiss-cheese.jpg"},
    { name : "yougurt" , category : "dairy" , price : 100  , imgSrc : "images/dairy/yougurt.jpg"},

    { name : "schnitzel" , category : "fastfood" , price : 100  , imgSrc : "images/fast-food/schnitzel.jpg"},
    { name : "steak" , category : "fastfood" , price : 100  , imgSrc : "images/fast-food/steak.jpg"},
    { name : "burritos" , category : "fastfood" , price : 100  , imgSrc : "images/fast-food/burritos.jpg"},
    { name : "fried chicken" , category : "fastfood" , price : 100  , imgSrc : "images/fast-food/fried-chicken.jpg"},
    { name : "hamburger" , category : "fastfood" , price : 100  , imgSrc : "images/fast-food/hamburger.jpg"},
    { name : "hotdog-&fries" , category : "fastfood" , price : 100  , imgSrc : "images/fast-food/hotdog&fries.jpg"},
    { name : "mac-cheese" , category : "fastfood" , price : 100  , imgSrc : "images/fast-food/mac-cheese.jpg"},
    { name : "pizza" , category : "fastfood" , price : 100  , imgSrc : "images/fast-food/pizza.jpg"},
    { name : "pumpkin-spice-latte" , category : "fastfood" , price : 100  , imgSrc : "images/fast-food/pumpkin-spice-latte.jpg"},
]

function showtotal(){

    document.getElementById("table")

}

let counter ;
let _total = 0 ;
let total2 = 0
let currentTotal = 0










function AddToCart(clicked_val)
{ 
  


         arrypic = mydesserts

         productval = mydesserts[clicked_val-1].price
    link =   document.getElementById(`row${clicked_val}`).id
    //display =  document.getElementById(`row${rownum}`) // div id
  //  display2 =  document.getElementById(`roww${rownum}`)//button id add
    showInCart =  document.getElementById(`obj${clicked_val}`) // right side div id
    currentpic =  document.getElementById(`rowa${clicked_val}`).src // look id on display frame
    selectedImage =  document.getElementById(`myimg${clicked_val}`) //div image - id of the small size image
    console.log(selectedImage)  
    mydiv = document.getElementById("middle")
    mypicnum = arrypic[clicked_val-1].id//for tests
    let k =  arrypic[clicked_val-1].imgSrc//for tests
    console.log(currentpic)//for tests
    console.log(k);    //for tests
    console.log(mypicnum );//for tests
    console.log(clicked_val)//for tests
     //obj = `obj${clicked_val}`;

      if (selectedImage == null){
         //document.getElementById(`price${rownum}`).value = arrName[i].price;

        productcounter = 1  
        showInCart.innerHTML +=  `<img id="myimg${clicked_val}"  width="145px" height="120px" style="margin-left:30px;" ;
    src=${currentpic}><br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 
    <input type="text" style="width: 22px " "margin-left:30px" value="${productval}" readonly>
    &nbsp&nbsp&nbsp<input type="text" id= "counter${clicked_val}" style="width: 10px " "margin-left:10px" value="${productcounter}"  readonly>
   <button class="remove"  onclick="remove('${clicked_val}')">remove</button><br><br><br><br>`   
   console.log(productcounter)  
    console.log(selectedImage)  
    
    console.log(_total)  
       _total += productval
       console.log(_total)  
       document.getElementById("total").value = _total

        }     
      else   {
        productcounter++
        console.log(productcounter)  



      // document.getElementById(`counter${clicked_val}`).value++
      // let count = document.getElementById(`counter${clicked_val}`).value
      // console.log(count)
      document.getElementById(`counter${clicked_val}`).value++
      let count = document.getElementById(`counter${clicked_val}`).value
      _total += productval
      document.getElementById("total").value = _total
      console.log(count)
      
// if( count > 0 ){

//   total2 = (_total * count)   // not correvt need fix
//       console.log(total2)
//       cartTotal == document.getElementById("total")
//       cartTotal.value = currentTotal + total2
//        total3+=total2
//       console.log(total3)
// }     
      } 

      
}

// function combine(){

//   document.getElementById("total")
// total3 = total2
// console.log(total3)


// }



//use display 3 value using jequery 

function remove(myval){
  divval =  document.getElementById(`roww${myval}`).value//button id add
  showInCart =  document.getElementById(`obj${myval}`) // right side div id
 itemCounter = document.getElementById(`counter${divval}`) 
 display =  document.getElementById(`row${myval}`).value // div id
 arrypic = mydesserts
  console.log(itemCounter.value)
 mypicnum = arrypic[divval-1].id//for tests
 product = document.getElementById(`myimg${myval}`)

  if ( itemCounter.value > 0 ) {    

    productval = mydesserts[myval-1].price
    document.getElementById(`counter${myval}`).value--
       _total = _total - productval
     document.getElementById("total").value = _total
     if (itemCounter.value ==0) {
      showInCart.innerHTML = ''
    }

     // console.log(count)
      console.log(_total)
      console.log(productval)
      console.log(itemCounter)
      console.log(divval)

  }

 
 
}


// function removepic(){
//   let count = document.getElementById(`counter${divval}`).value
//  if (count==0) {
//     showInCart.innerHTML = ''
//   }
// }
















function menu(foodtype){ // puts the wanted itemlist in the  desserts section - dairy and fastfood are not used only for show
    for (let i = 0; i < itemlist.length; i++) {

  if(itemlist[i].category == foodtype){

    if(foodtype=="dessert"){
        mydesserts.push(itemlist[i])

        

    }
    if(foodtype=="dairy"){
        mydairy.push(itemlist[i])

    }
    if(foodtype=="fastfood"){
        myfastfood.push(itemlist[i])

    }
        

     }

}

}
 


let rownum=1         
foodtype =""
const mydesserts = [];
const mydairy = [];
const myfastfood = [];

//most of the functions not properly used because it makes duplicate picture on the Dom which i cant solve 
function displayframe(arrName){  // the function that prints the dom onload

    display =  document.getElementById(`row${rownum}`)
    display=  document.getElementById(`col${rownum}`)
    display =  document.getElementById(`dom${rownum}`)
    myprice = document.getElementById(`price${rownum}`).value

   


    if (arrName = "mydesserts") {
      arrName = mydesserts
        rownum=1
      display =  document.getElementById(`row${rownum}`)
     for (let i = 0; i < arrName.length; i++) {
        
      display =  document.getElementById(`row${rownum}`)
       display.innerHTML +=  `<img id="rowa${rownum}" width="300px" height="300px" ; src=${arrName[i].imgSrc}>` ; //image id rowa
       //console.log(display)
       document.getElementById(`price${rownum}`).value = arrName[i].price;

       rownum++
               }
      
  }


    if (arrName = "mydairy") {
        arrName = mydairy
          rownum=1
        display=  document.getElementById(`col${rownum}`)
       for (let i = 0; i < arrName.length; i++) {
          
        display =  document.getElementById(`col${rownum}`)
        display.innerHTML +=  `<img width="300px" height="300px"; src=${arrName[i].imgSrc}>` ;
         rownum++
                 }
        
    }

    if (arrName = "myfastfood") {
        arrName = myfastfood
          rownum=1
          display =  document.getElementById(`dom${rownum}`)
       for (let i = 0; i < arrName.length; i++) {
          
        display =  document.getElementById(`dom${rownum}`)
        display.innerHTML +=  `<img width="300px" height="300px" ; src=${arrName[i].imgSrc}>` ;
         rownum++
                 }
        
    }
    
    
       }

       
