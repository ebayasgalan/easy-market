import { getContext } from '@keystone-6/core/context';
// import * as PrismaModule from '@prisma/client';
import config from '../keystone';
import { products } from './data';

function timestamp() {
    // sometime in the last 30 days
    const stampy =
      Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
    return new Date(stampy).toISOString();
}

const testPhoto = {
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
            original_filename: 'file',
        },
    },
};

//   publicUrl: 'https://res.cloudinary.com/djmraqiyz/image/upload/v1574351965/easy-market/smart_phone.jpg',
//   publicUrlTransformed: 'https://res.cloudinary.com/djmraqiyz/image/upload/v1574351965/easy-market/smart_phone.jpg'

const insertSeedData = async () => {
    // const context = getContext(config, PrismaModule);
    console.log(`Inserting Seed Data: ${products.length} products`);

    for (const product of products) {
        console.log(`Adding product.name: ${product.name}`);
        console.log(`product.photo: ${product.photo}`);
        console.log(`product.description: ${product.description}`);
        // const item = await context.db.Product.findOne({
        //     where: { name: product.name },
        // });

        // if (!item) {
        // const newProductImage = await context.db.ProductImage.createOne({
        //     data: {image: product.photo, altText: product.description},
        // });
        const returnResponse = await context.db.ProductImage.createOne({
            // image: testPhoto.photo,
            data: {
                image: JSON.stringify(testPhoto.photo),
                altText: testPhoto.description
            }
        });
        // console.log(`newProductImage: ${id}`);
        // product.photo = newProductImage;
        console.log(`End Product: ${product}`);
        // await context.db.Product.createOne({
        //     data: product,
        // });
    }
    console.log(`Seed Data Inserted: ${products.length} Products`);
    console.log(`Please start the process with \`yarn dev\` or \`npm run dev\``);
}

insertSeedData();