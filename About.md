Ben Aizenstein - Online Cart Project - John Bryce - 09/06/2021

    I created an online store for sporting goods

    css: all of the pages is divided into 3 parts:
        1. nav bar top: logo, search,personal area,cart, fav
        2. adv: Johm Bryce Advertising
        3. display area: divided into 2 parts
            3.1l eft nav bar
            3.2 cards display container
    I used the Flexbox and Possitions to divide the page as I mentioned above.
    I also used some animations for better UX.


    js: The technique I used to add/remove/display products is one array that updated every action
        Example: ADD: adding a product to an array is done as follows: myArray[i].cart = true, 
                 DISPLAY Condition: loop{if(myArray[i].cart){print}}
        At the end of each operation the array is saved (JSON) in local storage.

        To complete an order you need to register and log in(MODAL),The conditions are simple for ease of use.
        At the end of the order are transferred to the thank you page and the relevant data is sent in the URL
        If the user is logged in after clicking on the personal area he will be able to see all his orders(another array) and log out.

    
    
                 
