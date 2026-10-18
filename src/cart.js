function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, newProduct, quantity) { 
  if (quantity === 0) throw new RangeError("Quantity can not be 0");
  const matchProduct = cart.find((product) => product.id === newProduct.id);
  console.log(matchProduct);
  
  if (matchProduct) {
    if (newProduct.stock < matchProduct.quantity + quantity) throw new RangeError("Not enough stock");
    matchProduct.quantity += quantity;
  } else {
    if (newProduct.stock < quantity) throw new RangeError("Not enough stock");
    cart.push({...newProduct, quantity:quantity});
  }
  return cart;
}
function changeQuantity(cart, id, quantity) { 
  if (quantity === 0) throw new RangeError("Quantity can not be 0");
  const matchProduct = cart.find((product) => product.id === id);
  if (matchProduct) {
    if (matchProduct.stock < quantity) throw new RangeError("Not enough stock");
    matchProduct.quantity = quantity;
  } 
  return cart;
}
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
