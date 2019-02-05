import { Query } from "react-apollo";
import propTypes from "prop-types";
import gql from "graphql-tag";

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      email
      name
      permissions
    }
  }
`;

const User = props => (
  <Query query={CURRENT_USER_QUERY} {...props}>
    {payload => props.children(payload)}
  </Query>
);

User.propTypes = {
  children: propTypes.func.isRequired
};

export default User;
export { CURRENT_USER_QUERY };
