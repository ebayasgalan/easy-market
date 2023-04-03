export default function calcTotalPrice(cart) {
  return cart.reduce((total, cartItem) => {
    if (!cartItem.product) return total; // products can be deleted, but they could still be in your cart
    return total + cartItem.quantity * cartItem.product.price;
  }, 0);
}
