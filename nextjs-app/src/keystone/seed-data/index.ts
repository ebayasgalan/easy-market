import { getContext } from '@keystone-6/core/context';
// import * as PrismaModule from '@prisma/client';
// import config from '../../../keystone';
import { products } from './data';

function timestamp() {
    // sometime in the last 30 days
    const stampy =
      Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
    return new Date(stampy).toISOString();
}

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
        // const returnResponse = await context.db.ProductImage.createOne({
        //     // image: testPhoto.photo,
        //     data: {
        //         image: JSON.stringify(testPhoto.photo),
        //         altText: testPhoto.description
        //     }
        // });
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

// insertSeedData();