import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const demoUser = await prisma.user.create({
      data: {
        name: 'Demo User',
        email: 'demoUser@gmail.com',
        hashedPassword: '$2b$12$4BQpPUdumANoDFomZC1skO4kog7a65TQqP3sJiW6JP9HQleHgf70e',
        products: {
          createMany: {
            data: [
                { 
                  name: 'Ipad', 
                  description: '11 inch iPad Pro',
                  photo: 'https://tech-challenges.s3.us-east-2.amazonaws.com/ipad.jpg',
                  price: 29999 
                },
                { 
                  name: 'Rolex Watch', 
                  description: 'Wrist watch that never stops',
                  photo: 'https://tech-challenges.s3.us-east-2.amazonaws.com/watch.jpg',
                  price: 754999
                },
                { 
                  name: 'Playstation', 
                  description: 'PS5 that has 1TB memory and an extra controller',
                  photo: 'https://tech-challenges.s3.us-east-2.amazonaws.com/ps5.jpg',
                  price: 44999
                },
                { 
                  name: 'Running Shoes', 
                  description: 'Comfortable nike brand shoes, designed to be ultra light',
                  photo: 'https://tech-challenges.s3.us-east-2.amazonaws.com/shoes.jpg',
                  price: 17999
                },
                { 
                  name: 'Blue bird', 
                  description: 'Quick, throw your pokeball! This bird is very hard to find.',
                  photo: 'https://tech-challenges.s3.us-east-2.amazonaws.com/veronika-karas-Hf7Dz1WrmA0-unsplash.jpg',
                  price: 56999
                },
                { 
                  name: 'Stack of pancakes', 
                  description: 'Easy to make yummy pancakes for breakfast',
                  photo: 'https://tech-challenges.s3.us-east-2.amazonaws.com/pancakes.jpg',
                  price: 1299
                },
              ],
          },
        },
      },
    })
    console.log({ demoUser })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})