import type { GraphQLSchema } from 'graphql';
import { mergeSchemas } from '@graphql-tools/schema';
import addToCart from './addToCart';
import checkout from './checkout';

const graphql = String.raw;

export const extendGraphqlSchema = (baseSchema: GraphQLSchema) => {
  return mergeSchemas({
    schemas: [baseSchema],
    typeDefs: graphql`
      type Mutation {
        addToCart(productId: ID): CartItem
        checkout(token: String!): Order
      }
    `,
    resolvers: {
      Mutation: {
        addToCart,
        checkout,
      },
    },
  });
};