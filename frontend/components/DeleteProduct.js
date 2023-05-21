import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(where: {id: $id}) {
      id
      name
    }
  }
`;

const ButtonStyles = styled.button`
  &:hover{
    cursor: pointer
  }
`

function update(cache, payload) {
  console.log(payload);
  console.log('running the update function after delete');
  cache.evict(cache.identify(payload.data.deleteProduct));
}

export default function DeleteProduct({ id, children }) {
  const [deleteProduct, { loading, error }] = useMutation(
    DELETE_PRODUCT_MUTATION,
    {
      variables: { id },
      update

    }
  );
  return (
    <ButtonStyles
      type="button"
      disabled={loading}
      onClick={ async () => {
        if (confirm('Are you sure you want to delete this item?')) {
          const res = await deleteProduct().catch((err) => alert(err.message));
          console.log('Product Deleted!');
        }
      }}
    >
      {children}
    </ButtonStyles>
  );
}
