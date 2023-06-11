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