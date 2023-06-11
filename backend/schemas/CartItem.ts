import { integer, select, text, relationship } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { rules, isSignedIn } from '../access';
import { allowAll } from '@keystone-6/core/access';

export const CartItem = list({
  // access: {
  //   operation: {
  //     create: isSignedIn,
  //   },
  //   filter: {
  //     query: rules.canOrder,
  //     update: rules.canOrder,
  //     delete: rules.canOrder,
  //   },
  // },
  access: {
    operation: allowAll
  },
  ui: {
    listView: {
      initialColumns: ['product', 'quantity', 'user'],
    },
  },
  fields: {
    quantity: integer({
      defaultValue: 1,
      validation: { isRequired: true },
    }),
    product: relationship({ ref: 'Product' }),
    user: relationship({ ref: 'User.cart' }),
  },
});
