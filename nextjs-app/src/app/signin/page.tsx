'use client';

import { signIn } from "next-auth/react";
import Signin from '../../components/Signin';
import Signup from '../../components/Signup';
import '../../components/styles/signInStyles.scss';
// import NProgress from 'nprogress';

export default async function SignInPage() {

  async function handleSubmit(e) {
    // NProgress.start();
    console.log('demoUser logging in...');
    const res = await signIn('credentials', 
      {
        email: "demoUser@gmail.com",
        password: "demoUser",
        callbackUrl: '/'
      },
    )
    // NProgress.done();
  }

  return (
    <div className="signInPage">
      <button className='demo-button' onClick={handleSubmit}>Bypass login for demo purposes</button>
      <div className='forms'>
        <Signin /> 
        <Signup />
      </div>
    </div>
  );
}
