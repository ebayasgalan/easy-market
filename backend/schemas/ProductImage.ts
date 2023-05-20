import { relationship, text, image } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import 'dotenv/config';
import { isSignedIn, permissions } from '../access';
import { allowAll } from '@keystone-6/core/access';

export const ProductImage = list({
  access: {
    operation: allowAll
  },
  // access: {
  //   create: isSignedIn,
  //   query: () => true,
  //   update: permissions.canManageProducts,
  //   delete: permissions.canManageProducts,
  // },
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