function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, newProduct, quantity) { 
  if (quantity === 0) throw new RangeError("Quantity can not be 0");
  if (newProduct.stock < quantity) throw new RangeError("Not enough stock");
  const matchProduct = cart.find((product) => product.id === newProduct.id);
  if (matchProduct) matchProduct.quantity += quantity;
  else cart.push({...newProduct, quantity:quantity});
  return cart;
}
function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
