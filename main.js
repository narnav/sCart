let carts= document.querySelectorAll('.add-cart');

 let products= [
    {
        name: 'Spelt Bread',
        tag: 'speltbread',
        price: 25,
        inCart: 0
    },
    {
        name: 'Sourcream Bread',
        tag: 'sourcreambread',
        price: 30,
        inCart: 0
    },
    {
        name: 'Chocolate Granola',
        tag: 'chocolategranola',
        price: 35,
         inCart: 0
    },
    {
        name: 'Cinamon Granola',
        tag: 'cinamongranola',
        price: 35,
        inCart: 0
    },
 ]

  for (let i = 0; i < carts.length; i++) {
     carts[i].addEventListener('click', () => {
         //console.log(added)
         cartNumbers(products[i]);
         totalCost(products[i])
     })
  }

  function onLoadCartNumbers() {
    let productNumbers= localStorage.getItem('cartNumbers');
     if (productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
     } 
  }

  function cartNumbers(product, action) {
    //   console.log('the product clicked is', product);
      let productNumbers= localStorage.getItem('cartNumbers');
    //   console.log(productNumbers);
    //   console.log(typeof productNumbers);
      productNumbers = parseInt(productNumbers);
      let cartItems = localStorage.getItem('productsInCart');
      cartItems = JSON.parse(cartItems);

      if (action == "decrease") {
          localStorage.setItem('cartNumbers', productNumbers -1);
          document.querySelector('.cart span').textContent = productNumbers - 1;
      } else if( productNumbers){
          localStorage.setItem("cartNumbers", productNumbers + 1);
          document.querySelector('.cart span').textContent = productNumbers + 1;
      } else {
          localStorage.setItem('cartNumbers', 1);
          document.querySelector('.cart span').textContent = 1;
      }
    //   console.log(typeof productNumbers);
    //  if (productNumbers) {
    //     localStorage.setItem('cartNumbers', productNumbers +1);
    //     document.querySelector('.cart span').textContent = productNumbers +1;
    //  } else  {
    //     localStorage.setItem('cartNumbers', 1);
    //     document.querySelector('.cart span').textContent = 1;
    //  } 
     setItems(product);
  }

  function setItems(product) {
      // console.log('Inside of the setItems function');
      // console.log('my product is', product);
      let cartItems = localStorage.getItem('productsInCart');
      //console.log('my cartItems are', cartItems);
      cartItems = JSON.parse(cartItems);
      if(cartItems != null){
             if(cartItems[product.tag] == undefined){
                 cartItems = {
                     ...cartItems,
                     [product.tag]: product
                 }
             }
          cartItems[product.tag].inCart += 1;
      } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
      }
      localStorage.setItem('productsInCart', JSON.stringify (cartItems));
  }
 
  function totalCost(product, action) {
      // console.log('the product price is', product.price);
      let cartCost = localStorage.getItem('totalCost');
     
      console.log('My cartCost is', cartCost);
      console.log(typeof cartCost);

      if(action == "decrease"){
         cartCost = parseInt(cartCost);

         localStorage.setItem('totalCost', cartCost - product.price);
      }else if(cartCost != null) {
         cartCost = parseInt(cartCost);
         localStorage.setItem("totalCost",cartCost+
         product.price);
      }else {
         localStorage.setItem('totalCost', product. price);  
            }
   }

   function displayCart() {
       let cartItems = localStorage.getItem("productsInCart");
       cartItems = JSON.parse(cartItems);
       //console.log(cartItems)
        let productContainer = document.querySelector(".products");
        let cartCost = localStorage.getItem('totalCost');
        if(cartItems && productContainer ) {
            //console.log("running")
            productContainer.innerHTML = '';
            Object.values(cartItems).map (item => {
                productContainer.innerHTML += `
                <div class= "product">
                    <ion-icon name="close-circle-outline"></ion-icon>
                    <span>${item.name}</span>
                </div>
                <div class= "price">${item.price} nis></div>
                <div class= "quantity">   
                   <ion-icon class= "decrease" 
                   name="remove-outline"></ion-icon>
                   <span>${item.inCart}</span>
                   <ion-icon class= "increase" 
                   name="add-outline"></ion-icon>
                </div>
                <div class= "total">
                ${item.inCart * item.price} nis
                </div>`
            });
            productContainer.innerHTML += `
                <div class= "basketTotalContainer">
                 <h3 class= "basketTotalTitle">
                        Basket Total </h3>
                 <h3 class= "basketTotal">   :  
                        ${cartCost}nis
                 </h3>
            `
        }
        manageQuantity();
        deleteButtons();
   }

   function deleteButtons(){
       let deleteButtons = document.querySelectorAll(".product ion-icon");
       let productName;
       let productNumbers = localStorage.getItem('cartNumbers');
       let cartItems = localStorage.getItem('productsInCart');
        // console.log(cartItems);
        cartItems = JSON.parse(cartItems);
        let cartCost = localStorage.getItem('totalCost');
        
       for (let i=0; i < deleteButtons.length; i++) {
           deleteButtons[i].addEventListener('click', () => {
           //console.log('clicked');
           productName = deleteButtons[i]
           .parentElement.textContent.trim().toLowerCase().replace(/ /g, '');
           // console.log(productName);
           // console.log(cartItems[productName].name + " " + cartItems[productName].inCart);
           // console.log("We have " + productNumbers + "products in cart");

            localStorage.setItem('cartNumbers', productNumbers -  cartItems[productName].inCart);

            localStorage.setItem('totalCost', cartCost - 
            (cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartNumbers();
           });
          
       }
   }
   
   function manageQuantity() {
       let decreaseButtons = document.querySelectorAll('.decrease');
       let increaseButtons = document.querySelectorAll('.increase');
       let cartItems = localStorage.getItem('productsInCart');
       let currentQuantity = 0;
       let currentProduct = " ";
       //console.log(cartItems);
       cartItems = JSON.parse(cartItems);
       //console.log(cartItems);

       
       for (let i = 0; i < decreaseButtons.length; i++) {
          decreaseButtons[i].addEventListener('click', ()=> {
              //console.log('decrease button');
              currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
              //console.log(currentQuantity);
              currentProduct = decreaseButtons[i]
              .parentElement.previousElementSibling.previousElementSibling
              .querySelector('span').textContent.toLowerCase().replace(/ /g,'').trim();
              //console.log(currentProduct);

             if(cartItems[currentProduct].inCart >1) {
                cartItems[currentProduct].inCart -=  1; 
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
             }
          });
       }

       for(let i=0; i < increaseButtons.length; i++) {
        increaseButtons[i].addEventListener('click', () => {
            console.log("Increase button");
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);

            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();
            console.log(currentProduct);

            
                cartItems[currentProduct].inCart += 1;
                cartNumbers( cartItems[currentProduct]);
                totalCost( cartItems[currentProduct]);
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            
        })
    }
}

onLoadCartNumbers();
displayCart();