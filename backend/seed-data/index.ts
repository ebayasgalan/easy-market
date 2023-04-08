// import { products } from './data';

console.log('from index.ts file');

// export async function seedDatabase(context) {
//   console.log(`Inserting Seed Data: ${products.length} products`);

//   for (const product of products) {
//     console.log(`Adding Product: ${product.name}`);
//     const item = await context.db.Product.findOne({
//       where: { name: product.name },
//     });

//     if (!item) {
//       const newProductImage = await context.db.ProductImage.createOne({
//         data: {image: product.photo, altText: product.description},
//         query: 'id',
//       });
//       product.photo = newProductImage;
//       await context.db.Product.createOne({
//         data: product,
//       });
//     }
//   }
//   console.log(`Seed Data Inserted: ${products.length} Products`);
//   console.log(`Please start the process with \`yarn dev\` or \`npm run dev\``);
//   process.exit();
// }