import RequestReset from '../../components/RequestReset';
import Reset from '../../components/Reset';

// Commented out because the build process was throwing error: 
// Type error: Page "src/app/reset/page.js" has an invalid "default" export:
//   Type "{ query: any; }" is not valid.

// export default function ResetPage({ query }) {
//   if (!query?.token) {
//     return (
//       <div>
//         <p>Sorry you must supply a token</p>
//         <RequestReset />
//       </div>
//     );
//   }
//   return (
//     <div>
//       <p>RESET YOUR PASSWORD</p>
//       <Reset token={query.token} />
//     </div>
//   );
// }
export default function ResetPage() {
  // if (!query?.token) {
  //   return (
  //     <div>
  //       <p>Sorry you must supply a token</p>
  //       <RequestReset />
  //     </div>
  //   );
  // }
  return (
    <div>
      <p>RESET YOUR PASSWORD</p>
      {/* <Reset token={query.token} /> */}
    </div>
  );
}
