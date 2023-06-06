import { createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';
import { keystoneContext } from '../../../keystone/context';
 
const { handleRequest } = createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema: keystoneContext.graphql.schema,
 
  // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
  graphqlEndpoint: '/api/graphql',

  /*
  `keystoneContext` object doesn't have user's session information.
  You need an authenticated context to CRUD data behind access control.
  keystoneContext.withRequest(req, res) automatically unwraps the session cookie
  in the request object and gives you a `context` object with session info
  and an elevated sudo context to bypass access control if needed (context.sudo()).
  */
  context: ({ req, res }) => keystoneContext.withRequest(req, res),
 
  // Yoga needs to know how to create a valid Next response
  // fetchAPI: { Response }
})
 
export { handleRequest as GET, handleRequest as POST }