export default function calcTotalPrice(cart) {
  return cart.reduce((total, cartItem) => {
    if (!cartItem.id) return total; // products can be deleted, but they could still be in the cart
    return total + cartItem.quantity * cartItem.price;
  }, 0);
}
