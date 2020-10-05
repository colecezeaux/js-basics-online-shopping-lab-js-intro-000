var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let price = Math.floor(Math.random() * 100);

var newCart = {
itemName: item,
itemPrice: price
}

cart.push(newCart);
return `${cart[cart.length - 1].itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var output = "Your shopping cart is empty."
  if(cart.length == 1) {
    output = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if(cart.length == 2) {
    var order = `${cart[0].itemName} at $${cart[0].itemPrice}`
    var i;
    for(i = 1; cart.length > i; i++) {
    order = order + `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
    }
      output = `In your cart, you have ${order}.`
  } else if(cart.length == 3) {
    var order = `${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}`
    var i;
    for(i = 2; cart.length > i; i++) {
    order = order + `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
    }
      output = `In your cart, you have ${order}.`
  }
  return output
}

function total() {
  // write your code here
  var priceTotal = cart.reduce(function(prev, cur) {
    return prev + cur.itemPrice;
  }, 0);
  return priceTotal
}


function removeFromCart(item) {
  // write your code here
  var output = "That item is not in your cart."
  var i;
  for(i = 0; i < cart.length; i++) {
  }
  if(item === cart[i]) {
    output = cart.splice(0,1)
  }
  return output
}

function placeOrder(cardNumber) {
  // write your code here
}
