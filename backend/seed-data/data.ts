function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const products = [
  {
    name: 'Smart Phone',
    description: 'brand new android phone',
    status: 'AVAILABLE',
    price: 799,
    photo: {
      id: '5e2a13ff689b2835ae71d1a7',
      filename: 'kith-hoodie.jpg',
      originalFilename: 'kith-hoodie.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sick-fits-keystone/5e2a13ff689b2835ae71d1a7',
        version: 1579815935,
        signature: '360df116020320a14845cf235b87a4a5cdc23f86',
        width: 2000,
        height: 2000,
        format: 'jpg',
        resource_type: 'image',
        created_at: '2020-01-23T21:45:36.012Z',
        tags: [],
        bytes: 202924,
        type: 'upload',
        etag: 'b6fbc18b196c68e2b87f51539b849e70',
        placeholder: false,
        url: 'http://res.cloudinary.com/wesbos/image/upload/v1579815935/sick-fits-keystone/5e2a13ff689b2835ae71d1a7.jpg',
        secure_url:
          'https://res.cloudinary.com/wesbos/image/upload/v1579815935/sick-fits-keystone/5e2a13ff689b2835ae71d1a7.jpg',
        original_filename: 'file',
      },
    },
  },
]
// photo: {
//   id: '78asdfa262849d7961377c2c0',
//   filename: 'smart_phone.jpg',
//   encoding: '7bit',
//   originalFilename: 'smart_phone.jpg',
//   mimetype: 'image/jpeg',
//   publicUrl: 'https://res.cloudinary.com/djmraqiyz/image/upload/v1574351965/easy-market/smart_phone.jpg',
//   publicUrlTransformed: 'https://res.cloudinary.com/djmraqiyz/image/upload/v1574351965/easy-market/smart_phone.jpg'
// },
// _meta: {
  //   public_id: 'easy-market/5dfbed262849d7961377c2c0',
  //   version: 1576791335,
  //   signature: '3g7d5115788b7677307a39214f9684dd827ea5f9',
  //   width: 750,
  //   height: 457,
  //   format: 'jpg',
  //   resource_type: 'image',
  //   created_at: timestamp(),
  //   tags: [],
  //   bytes: 27871,
  //   type: 'upload',
  //   etag: 'fadsfhjk43226b6ca2e1c8ef9532be5a5',
  //   placeholder: false,
  //   url:
  //     'http://res.cloudinary.com/djmraqiyz/image/upload/v1574351965/easy-market/smart_phone.jpg',
  //   secure_url:
  //     'https://res.cloudinary.com/djmraqiyz/image/upload/v1574351965/easy-market/smart_phone.jpg',
  //   original_filename: 'file',
  // },
  // {
  //   name: 'Husky Puppy',
  //   description: 'blue eyed, 3 months old old husky puppy',
  //   status: 'AVAILABLE',
  //   price: 599,
  //   photo: {
  //     id: 'gggndf62849d7961377c2c0',
  //     filename: 'husky_puppy.jpg',
  //     originalFilename: 'husky_puppy.jpg',
  //     mimetype: 'image/jpeg',
  //     encoding: '7bit',
  //     _meta: {
  //       public_id: 'easy-market/23hfiau62849d7961377c2c0',
  //       version: 2336791335,
  //       signature: '84925352kjb5kjl9214f9684dd827ea5f9',
  //       width: 750,
  //       height: 457,
  //       format: 'jpg',
  //       resource_type: 'image',
  //       created_at: timestamp(),
  //       tags: [],
  //       bytes: 27871,
  //       type: 'upload',
  //       etag: '890ujlkfadsfb6ca2e1c8ef9532be5a5',
  //       placeholder: false,
  //       url:
  //         'http://res.cloudinary.com/djmraqiyz/image/upload/v1559495251/easy-market/husky_puppy.jpg',
  //       secure_url:
  //         'https://res.cloudinary.com/djmraqiyz/image/upload/v1559495251/easy-market/husky_puppy.jpg',
  //       original_filename: 'file',
  //     },
  //   },
  // },
  // {
  //   name: 'Headphone',
  //   description: 'Beats brand, silver headphone',
  //   status: 'AVAILABLE',
  //   price: 349,
  //   photo: {
  //     id: '23k24uijf849d7961377c2c0',
  //     filename: 'headphone.jpg',
  //     originalFilename: 'headphone.jpg',
  //     mimetype: 'image/jpeg',
  //     encoding: '7bit',
  //     _meta: {
  //       public_id: 'easy-market/2lklkoi2262849d7961377c2c0',
  //       version: 1145431335,
  //       signature: '343iujb5kjl9214f9684dd827ea5f9',
  //       width: 600,
  //       height: 500,
  //       format: 'jpg',
  //       resource_type: 'image',
  //       created_at: timestamp(),
  //       tags: [],
  //       bytes: 27871,
  //       type: 'upload',
  //       etag: '2kioi32afkfadsfb6ca2e1c8ef9532be5a5',
  //       placeholder: false,
  //       url:
  //         'http://res.cloudinary.com/djmraqiyz/image/upload/v1559949546/easy-market/headphone.jpg',
  //       secure_url:
  //         'https://res.cloudinary.com/djmraqiyz/image/upload/v1559949546/easy-market/headphone.jpg',
  //       original_filename: 'file',
  //     },
  //   },
  // },
  // {
  //   name: 'Sports watch',
  //   description: 'Durable sports watch',
  //   status: 'AVAILABLE',
  //   price: 239,
  //   photo: {
  //     id: 'qq323fsf849d7961377c2c0',
  //     filename: 'watch.jpg',
  //     originalFilename: 'watch.jpg',
  //     mimetype: 'image/jpeg',
  //     encoding: '7bit',
  //     _meta: {
  //       public_id: 'easy-market/podaf32262849d7961377c2c0',
  //       version: 1145431335,
  //       signature: '5499fgsfjiokjl9214f9684dd827ea5f9',
  //       width: 600,
  //       height: 500,
  //       format: 'jpg',
  //       resource_type: 'image',
  //       created_at: timestamp(),
  //       tags: [],
  //       bytes: 27871,
  //       type: 'upload',
  //       etag: 'sswew233dsfb6ca2e1c8ef9532be5a5',
  //       placeholder: false,
  //       url:
  //         'http://res.cloudinary.com/djmraqiyz/image/upload/v1574352474/easy-market/watch.jpg',
  //       secure_url:
  //         'https://res.cloudinary.com/djmraqiyz/image/upload/v1574352474/easy-market/watch.jpg',
  //       original_filename: 'file',
  //     },
  //   },
  // },
// ];