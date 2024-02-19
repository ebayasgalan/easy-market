// import './styles/headerStyles.scss';
import Cart from './Cart';
import Nav from './Nav';
// import Search from './Search';

interface currentUserProps {
  id: string,
  name: string,
  email: string,
  hashedPassword: string,
  roleId: null,
  passwordResetToken: null,
  passwordResetIssuedAt: null,
  passwordResetRedeemedAt: null,
  cart: []
}

export default async function Header({ cartItems }: {cartItems: any }) {

  return (
    // <nav className='header'>
    <header>
      <Nav count={cartItems?.length} />
      {/* <div className="sub-bar">
        <Search />
      </div> */}
      <Cart cartItems={cartItems} />
    </header>
  );
}