import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Error from "./ErrorMessage";

const StyledAccount = styled.div`
  text-align: center;
`;

const USER_QUERY = gql`
  query USER_QUERY {
    me {
      id
      name
      email
    }
  }
`;

const Account = () => {
  return (
    <Query query={USER_QUERY}>
      {({ data, error, loading }) => {
        if (error) return <Error error={error} />;
        if (loading) return <p>Loading...</p>;
        return (
          <StyledAccount>
            <h2>Name: {data.me.name}</h2>
            <p>User ID: {data.me.id}</p>
            <p>Email: {data.me.email}</p>
          </StyledAccount>
        );
      }}
    </Query>
  );
};

export default Account;
