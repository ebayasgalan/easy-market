'use client';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import NProgress from 'nprogress';
import Page from '../components/Page';
// import '../../components/styles/nprogress.css';
import { CartStateProvider } from '../lib/cartState';

// Router.events.on('routeChangeStart', () => NProgress.start());
// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

// This is how I can access the data via keystone-context-object 
// const session = {};
// const allProducts = await keystoneContext.withSession(session).query.Product.findMany({
//   query: 'id name price description photo { id picture { id url } }',
// });

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