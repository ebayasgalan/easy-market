'use client';

import { signIn } from "next-auth/react";
import Signin from '../../components/Signin';
import Signup from '../../components/Signup';
import '../../components/styles/signInStyles.scss';

export default async function SignInPage() {

  async function handleSubmit(e) {
    try {
      // console.log('demoUser logging in...');
      const res = await signIn('credentials', 
        {
          email: "demoUser@gmail.com",
          password: "demoUser",
          callbackUrl: '/'
        },
      )
    } catch(err) {
      console.error('err: ', err);
    }
  }

  return (
    <div className="signInPage">
      <button 
        className='h-12 md:w-1/3 mx-auto mt-8 block rounded-md bg-indigo-600 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' 
        onClick={handleSubmit}
      >
        Bypass login for demo purposes
      </button>
      <div className='forms'>
        <Signin /> 
        <Signup />
      </div>
    </div>
  );
}