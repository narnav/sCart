export default class Cart {
  static addtocartarray(selecteditem, arr) {
    if (arr.includes(selecteditem) === true) {
      let i = arr.indexOf(selecteditem);
      updatequantity(i, arr);
    } else {
      arr.push(selecteditem);
    }
    updatecartdispaly();
  }

  static updatequan(index, arr) {
    let quantity = arr[index].quantity;
    quantity++;
    arr[index].quantity = quantity;
  }
}
