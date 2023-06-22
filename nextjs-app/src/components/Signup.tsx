'use client';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signupSubmitHandler } from '../lib/server-actions'

const formSchema = yup.object({
  name: yup.string(),
  email: yup.string().email("Invalid email address").required(),
  password: yup.string().min(6).required('password is required'),
})

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    // @ts-ignore
    <form action={handleSubmit(signupSubmitHandler)}>
      <h2>Sign Up For an Account</h2>
      <fieldset>
        <label>
          Your Name
          <input
            type="text"
            placeholder="Your Name"
            autoComplete="name"
            {...register('name')}
          />
        </label>
        <p className='text-sm text-red-600 mt-1'>{errors.name?.message}</p>
        <label htmlFor="email">
          Email
          <input
            type="email"
            placeholder="Your Email Address"
            autoComplete="email"
            {...register('email')}
          />
        </label>
        <p className='text-sm text-red-600 mt-1'>{errors.email?.message}</p>
        <label htmlFor="password">
          Password
          <input
            type="password"
            placeholder="Password"
            autoComplete="password"
            {...register('password')}
          />
        </label>
        <p className='text-sm text-red-600 mt-1'>{errors.password?.message}</p>
        <button type="submit">Sign Up!</button>
      </fieldset>
    </form>
  );
}
