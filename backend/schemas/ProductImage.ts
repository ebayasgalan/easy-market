import 'dotenv/config';
import { relationship, text } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { cloudinaryImage } from '@keystone-6/cloudinary';
import { isSignedIn, permissions } from '../access';
import { allowAll } from '@keystone-6/core/access';


export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: process.env.CLOUDINARY_API_FOLDER,
};

export const ProductImage = list({
  // access: {
    // operation: {
    //   create: isSignedIn,
    //   query: () => true,
    //   update: permissions.canManageProducts,
    //   delete: permissions.canManageProducts,
    // }
  // },
  access: {
    operation: allowAll
  },
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',
    }),
    altText: text(),
    product: relationship({ ref: 'Product.photo' }),
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText', 'product'],
    },
  },
});
