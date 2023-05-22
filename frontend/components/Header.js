import Link from 'next/link';
import styled from 'styled-components';
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
  font-size: 2rem;
  display: flex;
  line-height: 24px;
  a {
    color: red;
    padding: 0.5rem 1rem;
    :hover {
      text-decoration: none;
    }
  }
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const HeaderStyles = styled.header`
  position: sticky;
  z-index: 30;
  top: 0;
  background: white;
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
  // console.log('data from Header.js: ', data);

  return (
    <HeaderStyles>
      <div>
        <div className="bar">
          <Logo>
            <Link href="/">Easy Market</Link>
          </Logo>
          <Nav />
        </div>
        <div className="sub-bar">
          <Search />
        </div>
        <Cart />
      </div>
    </HeaderStyles>
  );
}