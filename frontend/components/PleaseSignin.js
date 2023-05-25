'use client';

import { useUser } from './User';
import Signin from './Signin';

export default function ({ children }) {
  const me = useUser();
  if (!me) return <Signin />;
  return children;
}