// import RequestReset from '../../components/RequestReset';
import Signin from '../../components/Signin';
import Signup from '../../components/Signup';

export default function SignInPage() {

  return (
    <>
      {/* <button className='demo-button' onClick={handleSubmit}>Bypass login for demo purposes</button> */}
      {/* <div className='forms'> */}
        <Signin />
        <Signup />
        {/* <RequestReset /> */}
      {/* </div> */}
    </>
  );
}
