'use client';

import { signOut } from "next-auth/react";

export default function Signout() {

  const onClickHandler = async () => {
    await signOut({ callbackUrl: "/signin" })
  }
  
  return (
    <button onClick={onClickHandler} className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    >
      Sign Out
    </button>
  );
}