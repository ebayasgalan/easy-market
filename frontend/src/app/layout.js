'use client';

import { ApolloProvider } from '@apollo/client';
import NProgress from 'nprogress';
// import { useRouter } from 'next/navigation';
import Page from '../components/Page';
// import '../../components/styles/nprogress.css';
import { useApollo } from '../lib/apolloClient';
import { CartStateProvider } from '../lib/cartState';

// Router.events.on('routeChangeStart', () => NProgress.start());
// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

export default function RootLayout({ children, params }) {
  const apolloClient = useApollo(params);
  // console.log('params: ', params);

  return (
    <html lang="en">
      <ApolloProvider client={apolloClient}>
        <CartStateProvider>
          <Page>
            {children}
          </Page>
        </CartStateProvider>
      </ApolloProvider>
    </html>
  );
}