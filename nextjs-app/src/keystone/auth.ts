import { createAuth } from '@keystone-6/auth';
// import { sendPasswordResetEmail } from './lib/mail';
import { permissionsList } from './schemas/fields';

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password']
  },
  sessionData: `id name email role { ${permissionsList.join(' ')} }`,
  passwordResetLink: {
    async sendToken(args) {
      // send the email
      // await sendPasswordResetEmail(args.token, args.identity);
      console.log('sending email, need to update later');
    },
  },
});

export { withAuth };