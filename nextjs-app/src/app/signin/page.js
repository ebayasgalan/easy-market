'use client';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from '../../components/User';
import RequestReset from '../../components/RequestReset';
import Signin from '../../components/Signin';
import Signup from '../../components/Signup';
import { useRouter } from 'next/navigation';

const GridStyles = styled.div`
  .forms {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: 768px) {
      flex-direction: row;
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

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;


export default function SignInPage() {
  const router = useRouter();
  const [signin, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: {
      email: 'demoUser@gmail.com',
      password: 'demoUser'
    },
    // refetch the currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  
  async function handleSubmit(e) {
    console.log('demoUser logging in...');
    const res = await signin();
    console.log(res);
    router.push(`/products`);
  }
  return (
    <GridStyles>
      <button className='demo-button' onClick={handleSubmit}>Bypass login for demo purposes</button>
      <div className='forms'>
        <Signin />
        <Signup />
        <RequestReset />
      </div>
    </GridStyles>
  );
}
