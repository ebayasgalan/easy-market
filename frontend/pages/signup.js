import Signup from "../components/Signup";
import styled from "styled-components";
import Signin from "../components/Signin";
import RequestReset from "../components/RequestReset";
import User from "./User";
import Router from "next/router";

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const SignupPage = props => (
  <Columns>
    <User>
      {({data: {me}}) => {
        {!me && (Router.push({
          pathname: "/"
        }))}
        return (
          <Signin />
          <Signup />
          <RequestReset />
        )
      }
    }
    </User>
  </Columns>
);

export default SignupPage;
