'use client'

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signIn } from "next-auth/react";
import styled from 'styled-components';

const formSchema = yup.object({
  email: yup.string().email("Invalid email address").required(),
  password: yup.string().required('password is required').min(6),
})

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: var(--red);
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: red;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    &:hover {
      cursor: pointer;
    }
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        #ff3019 0%,
        #e2b04a 50%,
        #ff3019 100%
      );
    }
  }
`;

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
    <Form 
      className="shadow-lg bg-black border-solid border-white border-4" 
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
    </Form>
  );
}