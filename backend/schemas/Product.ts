import { integer, select, text, relationship } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { rules, isSignedIn } from '../access';
import { allowAll } from '@keystone-6/core/access';

export const Product = list({
  // access: {
  //   item: {
  //     create: isSignedIn,
  //   },
  //   filter: {
  //     query: rules.canReadProducts,
  //     update: rules.canManageProducts,
  //     delete: rules.canManageProducts,
  //   },
  // },
  access: {
    operation: allowAll
  },
  fields: {
    name: text({ 
      validation: { isRequired: true },
    }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    photo: relationship({
      ref: 'ProductImage.product',
      ui: {
        displayMode: 'cards',
        cardFields: ['picture', 'altText'],
        inlineCreate: { fields: ['picture', 'altText'] },
        inlineEdit: { fields: ['picture', 'altText'] },
      },
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
    price: integer(),
    user: relationship({
      ref: 'User.products',
      defaultValue: ({ context }) => ({
        connect: { id: context.session.itemId },
      }),
    }),
  },
});