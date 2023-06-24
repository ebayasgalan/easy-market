'use client';

import Link from 'next/link';
import styled from 'styled-components';
import Cart from './Cart';
import Nav from './Nav';
import StyledComponentsRegistry from '../lib/styledRegistry';
// import Search from './Search';

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  display: none;
  a {
    color: red;
    padding: 0.5rem 1rem;
    :hover {
      text-decoration: none;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    font-size: 2.5rem;
    padding: 0;
  }
`;

const HeaderStyles = styled.header`
  position: sticky;
  z-index: 30;
  top: 0;
  background: white;
  margin-bottom: 2rem;
  .bar {
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    max-width: var(--maxWidth);
    margin: auto;
    @media (min-width: 768px) {
      display: grid;
    }
    @media (min-width: 1024px) {
      padding: 0 10px;
    }
    @media (min-width: 1440px) {
      padding: 0 15px;
    }
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }

  @media (min-width: 768px) {
    border-bottom: 2px solid var(--lightGrey);
  }
`;

export default function Header({ cartItems, currentUser}) {
  
  return (
    <StyledComponentsRegistry>
      <HeaderStyles>
        <div>
          <div className="bar">
            <Logo>
              <Link href="/">Easy Market</Link>
            </Logo>
            <Nav cartItems={cartItems} />
          </div>
          {/* <div className="sub-bar">
            <Search />
          </div> */}
          <Cart cartItems={cartItems} currentUser={currentUser} />
        </div>
      </HeaderStyles>
    </StyledComponentsRegistry>
  );
}