import { config } from '@keystone-6/core';
import { statelessSessions } from '@keystone-6/core/session';
import { Role } from './src/keystone/schemas/Role';
import { OrderItem } from './src/keystone/schemas/OrderItem';
import { Order } from './src/keystone/schemas/Order';
import { CartItem } from './src/keystone/schemas/CartItem';
import { ProductImage } from './src/keystone/schemas/ProductImage';
import { Product } from './src/keystone/schemas/Product';
import { User } from './src/keystone/schemas/User';
import { withAuth } from './src/keystone/auth';
import { extendGraphqlSchema } from './src/keystone/mutations';
// import { insertSeedData } from './seed-data';

const databaseURL = process.env.DATABASE_URL ?? ``;

const sessionConfig: any = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET ?? ""
};

const bucketName = process.env.S3_BUCKET_NAME ?? '';
const region = process.env.S3_REGION ?? '';
const accessKeyId = process.env.S3_ACCESS_KEY_ID ?? '';
const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY ?? '';

export default withAuth(
  config({
    server: {
      cors: <any> {
        origin: [process.env.NEXT_PUBLIC_FRONTEND_URL ],
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