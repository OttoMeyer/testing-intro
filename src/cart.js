const DELIVERY_COST = 30000;
const THRESHOLD_DELIVERY_FEE = 50000;
const THRESHOLD_DISCOUNT = 20000;
const PROMO_CODE_NAME_10 = 'SAVE10'

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

function removeFromCart(cart, id) { 
  return cart.filter((product) => product.id !== id);
}

function calculateCartSubtotal(cart) {
  let sum = 0; 
  cart.forEach(product => {
    sum += product.price * product.quantity;
  });
  return sum; 
}

function calculateOrderTotal(cart, promoCode) { 
  const subtotal = calculateCartSubtotal(cart);
  const discount = subtotal >= THRESHOLD_DISCOUNT && promoCode === PROMO_CODE_NAME_10? subtotal * .1: 0;
  const delivery = subtotal >= THRESHOLD_DELIVERY_FEE? 0: DELIVERY_COST;
  const total = subtotal - discount + delivery;
  return {subtotal:subtotal, discount:discount, delivery:delivery, total:total};
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
