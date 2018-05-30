var cart = [];

function getCart() {
  
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * (100 - 1)) + 1;
 var cartItem = {itemName: name,
                itemPrice: price
                };
 cart.push(cartItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  return cart.reduce(function(finalMsg, item, idx){
    var and = ' and';
    var end = ', ';
    if (idx === 0){
      and = '';
    }
    if (idx === cart.length - 1){
      end = '.';
      and = 'and';
    }
    return finalMsg += `${and} ${item.itemName} at $${item.itemPrice}${end}`
  }, 'In your cart, you have')
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
