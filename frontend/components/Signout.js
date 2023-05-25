'use client';

import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useRouter } from 'next/navigation';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

export default function Signout() {
  const router = useRouter();
  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
    onCompleted: () => router.push('/signin')
  });
  return (
    <button type="button" onClick={signout}>
      Sign Out
    </button>
  );
}
