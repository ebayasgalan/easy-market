import {
  integer,
  select,
  text,
  relationship,
  virtual,
} from '@keystone-6/core/fields';
import { list, graphql } from '@keystone-6/core';
import { isSignedIn, rules } from '../access';
import formatMoney from '../lib/formatMoney';
import { allowAll } from '@keystone-6/core/access';

export const Order = list({
  // access: {
  //   operation: {
  //     create: isSignedIn,
  //     update: () => false,
  //     delete: () => false,
  //   },
  //   filter: {
  //     query: rules.canOrder,
  //   },
  // },
  access: {
    operation: allowAll
  },
  fields: {
    label: virtual({
      field: graphql.field({
        type: graphql.String,
        resolve(item) {
          return `${formatMoney(item.total)}`;
        },
      })
    }),
    total: integer(),
    items: relationship({ ref: 'OrderItem.order', many: true }),
    user: relationship({ ref: 'User.orders' }),
    charge: text(),
  },
});
