import Checkout from '@/components/Checkout';
import { getCurrentUser, getUserCartItems } from '../../lib/server-actions';
import calcTotalPrice from '../../lib/calcTotalPrice';

export default async function CheckoutPage() {

    // get all cart items relating to current user
    const currentUser = await getCurrentUser().catch(err => console.error('checkout page, currentUser-err: ', err));
    let cartItems = null;
    // get all user-selected products then dedupe and augment it with quantity 
    if(currentUser) cartItems = await getUserCartItems(currentUser.cart).catch(err => console.error('checkout page, cartItems-err: ', err));
    const totalPrice = calcTotalPrice(cartItems);

    return (
        <Checkout totalPrice={totalPrice} userId={currentUser?.id} cartItems={cartItems} />
    )
}