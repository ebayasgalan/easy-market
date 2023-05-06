import { useMemo } from 'react';
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
// import { getDataFromTree } from '@apollo/client/react/ssr';
import { createUploadLink } from 'apollo-upload-client';
import { endpoint, prodEndpoint } from '../config';
import paginationField from './paginationField';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient;

// function createApolloClient({ headers, initialState }) {
//   return new ApolloClient({
//     ssrMode: typeof window === 'undefined',
//     link: ApolloLink.from([
//       onError(({ graphQLErrors, networkError }) => {
//         if (graphQLErrors)
//           graphQLErrors.forEach(({ message, locations, path }) =>
//             console.log(
//               `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//             )
//           );
//         if (networkError)
//           console.log(
//             `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
//           );
//       }),
//       // this uses apollo-link-http under the hood, so all the options here come from that package
//       createUploadLink({
//         uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
//         // fetchOptions: {
//         //   credentials: 'include',
//         // },
//         // pass the headers along from this request. This enables SSR with logged in state
//         headers,
//       }),
//     ]),
//     cache: new InMemoryCache({
//       typePolicies: {
//         Query: {
//           fields: {
//             // TODO: We will add this together!
//             allProducts: paginationField(),
//           },
//         },
//       },
//     }).restore(initialState || {}),
//   });
// }

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
          );
      }),
      // this uses apollo-link-http under the hood, so all the options here come from that package
      createUploadLink({
        uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
        fetchOptions: {
          credentials: 'include',
        },
        // pass the headers along from this request. This enables SSR with logged in state
        // headers
        headers: {
          "apollo-require-preflight": true
        }
      }),
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allProducts: paginationField(),
          },
        },
      },
    }).restore()
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
    const data = merge(existingCache, initialState, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    })

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}