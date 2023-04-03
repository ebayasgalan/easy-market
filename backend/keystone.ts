import { config } from '@keystone-6/core';
// import { Context } from '@keystone-6/core/types';
import type { Context } from '.keystone/types';
import { withAuth } from './auth';

// Below are added packages from legacy code

import {
  statelessSessions,
} from '@keystone-6/core/session';
import { permissionsList } from './schemas/fields';
import { Role } from './schemas/Role';
import { OrderItem } from './schemas/OrderItem';
import { Order } from './schemas/Order';
import { CartItem } from './schemas/CartItem';
import { ProductImage } from './schemas/ProductImage';
import { Product } from './schemas/Product';
import { User } from './schemas/User';
import 'dotenv/config';
import { insertSeedData } from './seed-data';
import { extendGraphqlSchema } from './mutations';

const databaseURL = process.env.DATABASE_URL ?? `file:${process.cwd()}/keystone.db`;
console.log('process.env.DATABASE_URL: ', process.env.DATABASE_URL);

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      provider: 'postgresql',
      url: databaseURL,
      onConnect: async (context) => {
        console.log('Connected to the database!');
        // if (process.argv.includes('--seed-data')) {
        //   await insertSeedData(context);
        // }
      }
    },
    lists: ({
      User,
      // Product,
      // ProductImage,
      // CartItem,
      // OrderItem,
      // Order,
      // Role,
    }),  
    // extendGraphqlSchema,
    ui: {
      // Show the UI only for poeple who pass this test
      isAccessAllowed: ({ session }) =>
        !!session?.data,
    },
    session: statelessSessions(sessionConfig),
    // sessionStrategy: storedSessions({}, sessionConfig)
  })
);