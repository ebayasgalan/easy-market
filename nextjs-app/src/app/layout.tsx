import Link from 'next/link';
import './globals.css';
import AuthContext from '../lib/AuthContext';
import StyledComponentsRegistry from '../lib/styledRegistry';
import Cart from '../components/Cart';
import Nav from '../components/Nav';
import Search from '../components/Search';
import ChildrenWrapper from '../components/styles/ChildrenWrapper';
import { CartStateProvider } from '../lib/cartState';
import { getCurrentUser, getAllCartItems } from '../lib/server-actions';

export const metadata = {
  title: 'Easy-Market',
  description: 'Ecommerce site',
}

export default async function RootLayout({
  children
}) {
  // All the cart items relating to current user
  const currentUser = await getCurrentUser();
  let cartItems = [];
  if(currentUser) cartItems = await getAllCartItems(currentUser?.cart);
  
  console.log('root layout, currentUser: ', currentUser);
  console.log('root layout, all cartItems: ', cartItems);
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <CartStateProvider>
            <StyledComponentsRegistry>
              <div className='header-wrapper'>
                <div className='bar'>
                  {/* <Link href="/">Easy Market Logo</Link> */}
                  <Nav cartItems={cartItems}/>
                </div>
                <div className='sub-bar'>
                  <Search />
                </div>
                <Cart cartItems={cartItems} currentUser={currentUser} />
              </div>
              <ChildrenWrapper>
                {children}
              </ChildrenWrapper>
            </StyledComponentsRegistry>
          </CartStateProvider>
        </AuthContext>
      </body>
    </html>
  )
}