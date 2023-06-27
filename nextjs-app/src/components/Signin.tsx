'use client';

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signIn } from "next-auth/react";
import './styles/formStyles.scss';

const formSchema = yup.object({
  email: yup.string().email("Invalid email address").required(),
  password: yup.string().required('password is required').min(6),
})

const signinSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
  const res = await signIn('credentials', {
    ...data,
    callbackUrl: '/'
  })
  .catch(err => { throw new Error(err.message) });
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <form 
      className="formStyle" 
      action={handleSubmit(signinSubmitHandler)as any}
      >
      <h2>Sign Into Your Account</h2>
      <fieldset>
        <label>
          Email
          <input
            type="email"
            placeholder="email address"
            {...register('email')}
          />
        </label>
        <p className='text-sm text-red-600 mt-1'>{errors.email?.message}</p>
        <label>
          Password
          <input
            type="password"
            placeholder="Password"
            {...register('password')}
          />
        </label>
        <p className='text-sm text-red-600 mt-1'>{errors.password?.message}</p>
        <button className="bg-red-600 text-white" type="submit">Sign In!</button>
      </fieldset>
    </form>
  );
}