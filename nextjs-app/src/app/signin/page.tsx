'use client';

import styled from 'styled-components';
import { signIn } from "next-auth/react";
import Signin from '../../components/Signin';
import Signup from '../../components/Signup';
// import RequestReset from '../../components/RequestReset';

const GridStyles = styled.div`
  .forms {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
      gap: 10%
    }
  }
  .demo-button {
    padding: 14px;
    width: fit-content;
    // background: #000;
    background-image: linear-gradient(
      to right,
      #ff3019 0%,
      #e2b04a 50%,
      #ff3019 100%
    );
    color: #000;
    font-weight: 600;
    font-size: 14px;
    margin: 0 auto 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
    &:hover {
      cursor: pointer;
      box-shadow: 0px 37px 20px -20px rgba(0,0,0,0.2)
    }
  }
`;

export default async function SignInPage() {

  async function handleSubmit(e) {
    console.log('demoUser logging in...');
    const res = await signIn('credentials', 
      {
        email: "demoUser@gmail.com",
        password: "demoUser",
        callbackUrl: '/'
      },
    )
  }

  return (
    <GridStyles>
      <button className='demo-button' onClick={handleSubmit}>Bypass login for demo purposes</button>
      <div className='forms'>
        <Signin />
        <Signup />
        {/* <RequestReset /> */}
      </div>
    </GridStyles>
  );
}
