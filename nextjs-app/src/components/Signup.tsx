'use client';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { signIn } from "next-auth/react";
import * as yup from 'yup';
import { signupHandler } from '../lib/server-actions';
// import Form from './styles/Form';

const formSchema = yup.object({
  name: yup.string(),
  email: yup.string().email("Invalid email address").required(),
  password: yup.string().min(6).required('password is required'),
})

interface Data {
  name?: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitHandler = async (data: Data): Promise<void> => {
    const { email, password } = data;
    const newMember = await signupHandler(data).catch(err => console.log('err: ', err));
    console.log('submitHandler, newMember: ', newMember);
    
    // signin after successfull signup 
    const res = await signIn('credentials', {
      email: email,
      password: password,
      callbackUrl: '/'
    })
  }

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
      <h2>Sign Up</h2>
        <form className="space-y-6" action={handleSubmit(submitHandler)as any}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Your name
            </label>
            <div className="mt-2">
              <input
                {...register('name')}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                {...register('email')}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                {...register('password')}
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}