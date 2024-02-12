import './globals.css';
import AuthContext from '../lib/AuthContext';
import Header from '../components/Header';
import { CartStateProvider } from '../lib/cartState';
import { getCurrentUser, getUserCartItems } from '../lib/server-actions';

export const metadata = {
  title: 'Easy-Market',
  description: 'Ecommerce site'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  // get all cart items relating to current user
  const currentUser = await getCurrentUser().catch(err => console.error('RootLayout, currentUser-err: ', err));
  let cartItems = null;
  // get all user-selected products then dedupe and augment it with quantity 
  if(currentUser) cartItems = await getUserCartItems(currentUser.cart).catch(err => console.error('RootLayout, cartItems-err: ', err));
  
  // console.log('root layout, currentUser: ', currentUser);
  // console.log('root layout, all cartItems: ', cartItems);

  return (
    <html lang="en">
      <body>
        <AuthContext>
          <CartStateProvider>
              <Header cartItems={cartItems} currentUser={currentUser} />
              {children}
          </CartStateProvider>
        </AuthContext>
      </body>
    </html>
  )
}