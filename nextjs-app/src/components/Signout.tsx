'use client';

import { useRouter } from 'next/navigation';
import { signOut } from "next-auth/react";

export default function Signout() {
  const router = useRouter();

  const onClickHandler = () => {
    signOut()
    .then(() => router.push('/signin'))
    .catch(err => console.error(err));
  }
  
  return (
    <button onClick={onClickHandler}>
      Sign Out
    </button>
  );
}