import 'dotenv/config';
import { relationship, text, image } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
// import { cloudinaryImage } from '@keystone-6/cloudinary';

// export const cloudinary = {
//   cloudName: process.env.CLOUDINARY_CLOUD_NAME,
//   apiKey: process.env.CLOUDINARY_KEY,
//   apiSecret: process.env.CLOUDINARY_SECRET,
//   folder: process.env.CLOUDINARY_API_FOLDER,
// };

export const ProductImage = list({
  access: {
    operation: allowAll
  },
  fields: {
    picture: image({ storage: 'my_images' }),
    altText: text(),
    product: relationship({ ref: 'Product.photo' }),
  },
  ui: {
    listView: {
      initialColumns: ['picture', 'altText', 'product'],
    },
  },
});

// access: {
  // operation: {
  //   create: isSignedIn,
  //   query: () => true,
  //   update: permissions.canManageProducts,
  //   delete: permissions.canManageProducts,
  // }
// },