//storeProducts arrary - prodName, prodPrice, prodImg, serialNum, prodCat, amount
let StoreProducts=[{prodName:'Blue T-shirt', prodPrice:25, prodImg:'images/blue_shirt.jpg', serialNum:1, prodCat:'shirts', amount:0},
{prodName:'Green T-shirt', prodPrice:25, prodImg:'images/green_shirt.jpg', serialNum:2, prodCat:'shirts', amount:0},
{prodName:'Orange T-shirt', prodPrice:25, prodImg:'images/orange_shirt.jpg', serialNum:3, prodCat:'shirts', amount:0},
{prodName:'Pink T-shirt', prodPrice:25, prodImg:'images/pink_shirt.jpg', serialNum:4, prodCat:'shirts', amount:0},
{prodName:'Yellow T-shirt', prodPrice:25, prodImg:'images/yellow_shirt.jpg', serialNum:5, prodCat:'shirts', amount:0},
{prodName:'Bright Blue skirt', prodPrice:40, prodImg:'images/brightBlue_skirt.jpg', serialNum:6, prodCat:'skirts', amount:0},
{prodName:'Bright Purple skirt', prodPrice:40, prodImg:'images/brightPurple_skirt.jpg', serialNum:7, prodCat:'skirts', amount:0},
{prodName:'Dark Green skirt', prodPrice:40, prodImg:'images/darkGreen_skirt.jpg', serialNum:8, prodCat:'skirts', amount:0},
{prodName:'Navy Blue skirt', prodPrice:40, prodImg:'images/navyBlue_skirt.jpg', serialNum:9, prodCat:'skirts' , amount:0},
{prodName:'Oss White skirt', prodPrice:40, prodImg:'images/offWhite_skirt.jpg', serialNum:10, prodCat:'skirts', amount:0},

];

// save the products in localStorage to use everywherw
localStorage.setItem('products', JSON.stringify(StoreProducts));