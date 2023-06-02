import { createYoga, createSchema } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';
import { keystoneContext } from '../../keystone/context';

// Use Keystone API to create GraphQL handler
export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  graphqlEndpoint: '/api/graphql',
  schema: keystoneContext.graphql.schema,
  // schema: createSchema({
  //   typeDefs: /* GraphQL */ `
  //     type Query {
  //       greetings: String
  //     }
  //   `,
  //   resolvers: {
  //     Query: {
  //       greetings: () =>
  //         'This is the `greetings` field of the root `Query` type'
  //     }
  //   }
  // }),
  /*
    `keystoneContext` object doesn't have user's session information.
    You need an authenticated context to CRUD data behind access control.
    keystoneContext.withRequest(req, res) automatically unwraps the session cookie
    in the request object and gives you a `context` object with session info
    and an elevated sudo context to bypass access control if needed (context.sudo()).
  */
  // context: ({ req, res }) => keystoneContext.withRequest(req, res),
});