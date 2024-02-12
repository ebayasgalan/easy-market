import { getCurrentUser } from '@/lib/server-actions';

export default async function AccountPage() {
    let user = null;
    try {
        user = await getCurrentUser();
    } catch(err) {
        console.error('AccountPage, err: ', err)
    }

    if(user) {
        // console.log('user: ', user);
        const numberOfItems = user.cart.length;
        return <div>
        <h1>Hello {user.name}</h1>
        <p>you have {numberOfItems} {numberOfItems > 1 ? 'items': 'item'} in your cart</p>
        </div>
    }
}