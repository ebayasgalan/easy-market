import { Context } from '.keystone/types';
import { CartItem } from '.prisma/client';
import { Session } from '../types';

async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: Context
): Promise<CartItem> {
  console.log('ADDING TO CART!');
  // 1. Query the current user 
  const sesh = context.session as Session;
  if (!sesh.itemId) {
    throw new Error('You must be logged in to do this!');
  }
  // 2. Query the current user's cart
  const allCartItems = await context.db.CartItem.findMany({
    where: {
      user: { id: { equals: sesh.itemId } },
      product: { id: { equals: productId } },
    },
  });

  const [existingCartItem] = allCartItems;
  if (existingCartItem) {
    console.log(existingCartItem);
    console.log(
      `There are already ${existingCartItem.quantity}, increment by 1!`
    );
    // 3. See if the current item is in the cart
    // 4. if it is, increment by 1
    return context.db.CartItem.updateOne({
      where: { id: existingCartItem.id },
      data: { quantity: existingCartItem.quantity + 1 },
    });
  }
  // 4. if it's not, create a new cart item!
  return context.db.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: sesh.itemId } },
    },
  });
}

export default addToCart;