'use client';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import NProgress from 'nprogress';
import Page from '../components/Page';
// import '../../components/styles/nprogress.css';
import { CartStateProvider } from '../lib/cartState';

// Router.events.on('routeChangeStart', () => NProgress.start());
// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

export default function RootLayout({ children }) {
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/graphql`,
    cache: new InMemoryCache(),
  });

  return (
    <html lang="en">
      <ApolloProvider client={client}>
        <CartStateProvider>
          <Page>
            {children}
          </Page>
        </CartStateProvider>
      </ApolloProvider>
    </html>
  );
}