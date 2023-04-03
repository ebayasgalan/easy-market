import Link from 'next/link';
import styled from 'styled-components';
import { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Cart from './Cart';
import Nav from './Nav';
import Search from './Search';

const USER_ORDERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      name
      email
    }
  }
`;

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  background: red;
  transform: skew(-7deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;



export default function Header() {
  const { data, error, loading } = useQuery(USER_ORDERS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error was thrown</p>;
  console.log('data from Header.js: ', data);

  // useEffect(() => {
  //   fetch('https://dummyjson.com/products')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("from header.js: ", data);
  //     })
  // }, [])

  return (
    <Link href="/">Easy Market</Link>

    // <HeaderStyles>
    //   <div className="bar">
    //     <Logo>
    //       <Link href="/">Easy Market</Link>
    //     </Logo>
    //     <Nav />
    //   </div>
    //   <div className="sub-bar">
    //     <Search />
    //   </div>
    //   <Cart />
    // </HeaderStyles>
  );
}

// Header.getInitialProps = async (ctx) => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const json = await res.json()
//   console.log('from search.js: ', json);
// }

// export default Header