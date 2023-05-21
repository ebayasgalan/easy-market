import { list } from '@keystone-6/core';
import { text, password, relationship } from '@keystone-6/core/fields';
import { permissions, rules } from '../access';
import { allowAll } from '@keystone-6/core/access';

export const User = list({
  // access: {
  //   operation: {
  //     create: () => true,
  //     query: rules.canManageUsers,
  //     update: rules.canManageUsers,
  //     // only people with the permission can delete themselves!
  //     delete: permissions.canManageUsers,
  //   }
  // },
  access: {
    operation: allowAll
  },
  ui: {
    // hide the backend UI from regular users
    hideCreate: (args) => !permissions.canManageUsers(args),
    hideDelete: (args) => !permissions.canManageUsers(args),
  },
  fields: {
    name: text({ 
      validation: { isRequired: true },
    }),
    email: text({ 
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    password: password(),
    cart: relationship({
      ref: 'CartItem.user',
      many: true,
      ui: {
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
      },
    }),
    orders: relationship({ ref: 'Order.user', many: true }),
    role: relationship({
      ref: 'Role.assignedTo',
      access: {
        create: permissions.canManageUsers,
        update: permissions.canManageUsers,
      },
    }),
    products: relationship({
      ref: 'Product.user',
      many: true,
    }),
  },
});
