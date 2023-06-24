'use client';

import { signOut } from "next-auth/react";

export default function Signout() {

  const onClickHandler = async () => {
    await signOut({ callbackUrl: "/signin" })
  }
  
  return (
    <button onClick={onClickHandler}>
      Sign Out
    </button>
  );
}