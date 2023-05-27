import { config } from '@keystone-6/core';
import { statelessSessions } from '@keystone-6/core/session';
import { Role } from './schemas/Role';
import { OrderItem } from './schemas/OrderItem';
import { Order } from './schemas/Order';
import { CartItem } from './schemas/CartItem';
import { ProductImage } from './schemas/ProductImage';
import { Product } from './schemas/Product';
import { User } from './schemas/User';
import { withAuth } from './auth';
import { extendGraphqlSchema } from './mutations';
// import { insertSeedData } from './seed-data';
import { getContext } from '@keystone-6/core/context';
import * as PrismaModule from '.prisma/client';

const databaseURL = process.env.NEXT_PUBLIC_DATABASE_URL ?? ``;

const sessionConfig: any = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.NEXT_PUBLIC_COOKIE_SECRET,
};

const bucketName = process.env.NEXT_PUBLIC_S3_BUCKET_NAME ?? '';
const region = process.env.NEXT_PUBLIC_S3_REGION ?? '';
const accessKeyId = process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID ?? '';
const secretAccessKey = process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY ?? '';

const withAuthConfig = withAuth(
  config({
    server: {
      cors: <any> {
        origin: [process.env.NEXT_PUBLIC_FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      provider: 'postgresql',
      url: databaseURL,
      onConnect: async (context) => {
        console.log('Connected to the database!');
        // if (process.argv.includes('--seed-data')) {
        //   await insertSeedData(context.prisma);
        // }
        // const cloudinaryResponse = await context.db.ProductImage.createOne({
        //   data: {
        //       image: products.photo,
        //       altText: products.description
        //   }
        // });
      }
    },
    storage: {
      my_images: {
        kind: 's3', 
        type: 'image', 
        bucketName, 
        region, 
        accessKeyId, 
        secretAccessKey, 
        signed: { expiry: 5000 },
      },
    },
    lists: ({
      User,
      Product,
      ProductImage,
      CartItem,
      OrderItem,
      Order,
      Role,
    }),  
    extendGraphqlSchema,
    ui: {
      // Show the UI only for people who pass this test
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    session: statelessSessions(sessionConfig),
  })
);

// Making sure multiple prisma clients are not created during dev hot reloading
export const keystoneContext =
  (globalThis as any).keystoneContext || getContext(withAuthConfig, PrismaModule);

if (process.env.NODE_ENV !== 'production') {
    (globalThis as any).keystoneContext = keystoneContext;
}