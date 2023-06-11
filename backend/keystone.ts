import { config } from '@keystone-6/core';
import { statelessSessions } from '@keystone-6/core/session';
import { Role } from './schemas/Role';
import { OrderItem } from './schemas/OrderItem';
import { Order } from './schemas/Order';
import { CartItem } from './schemas/CartItem';
import { ProductImage } from './schemas/ProductImage';
import { Product } from './schemas/Product';
import { User } from './schemas/User';
import 'dotenv/config';
import { withAuth } from './auth';
import { extendGraphqlSchema } from './mutations';
// import { insertSeedData } from './seed-data';

const databaseURL = process.env.DATABASE_URL ?? `file:${process.cwd()}/keystone.db`;

const sessionConfig: any = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const bucketName = process.env.S3_BUCKET_NAME ?? '';
const region = process.env.S3_REGION ?? '';
const accessKeyId = process.env.S3_ACCESS_KEY_ID ?? '';
const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY ?? '';

export default withAuth(
  config({
    server: {
      cors: <any> {
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