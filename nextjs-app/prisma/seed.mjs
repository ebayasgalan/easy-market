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
                "id": "113",
                "category": "watch",
                "type": "classic",
                "name": "classic seiko",
                "gender": "men",
                "new": true,
                "sale": false,
                "rate": 5,
                "price": 120,
                "originPrice": 139,
                "brand": "seiko",
                "sold": 24,
                "quantity": 80,
                "quantityPurchase": 1,
                "sizes": [
                    "18",
                    "20"
                ],
                "variation": [
                    {
                        "color": "red",
                        "colorCode": "#DA4848",
                        "colorImage": "/images/product/1000x1000.png",
                        "image": "/images/product/1000x1000.png"
                    },
                    {
                        "color": "blue",
                        "colorCode": "#4856DA",
                        "colorImage": "/images/product/1000x1000.png",
                        "image": "/images/product/1000x1000.png"
                    }
                ],
                "thumbImage": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "images": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "description": "Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!",
                "action": "add to cart",
                "slug": "watch"
            },
            {
                "id": "114",
                "category": "watch",
                "type": "classic",
                "name": "classic seiko women",
                "gender": "women",
                "new": true,
                "sale": false,
                "rate": 5,
                "price": 110,
                "originPrice": 129,
                "brand": "seiko",
                "sold": 15,
                "quantity": 80,
                "quantityPurchase": 1,
                "sizes": [
                    "14",
                    "16"
                ],
                "variation": [
                    {
                        "color": "red",
                        "colorCode": "#DA4848",
                        "colorImage": "/images/product/1000x1000.png",
                        "image": "/images/product/1000x1000.png"
                    },
                    {
                        "color": "blue",
                        "colorCode": "#4856DA",
                        "colorImage": "/images/product/1000x1000.png",
                        "image": "/images/product/1000x1000.png"
                    }
                ],
                "thumbImage": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "images": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "description": "Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!",
                "action": "quick shop",
                "slug": "watch"
            },
            {
                "id": "115",
                "category": "watch",
                "type": "luxury",
                "name": "luxury seiko",
                "gender": "men",
                "new": true,
                "sale": false,
                "rate": 5,
                "price": 120,
                "originPrice": 139,
                "brand": "seiko",
                "sold": 24,
                "quantity": 80,
                "quantityPurchase": 1,
                "sizes": [
                    "18",
                    "20"
                ],
                "variation": [
                    {
                        "color": "red",
                        "colorCode": "#DA4848",
                        "colorImage": "/images/product/1000x1000.png",
                        "image": "/images/product/1000x1000.png"
                    },
                    {
                        "color": "silver",
                        "colorCode": "#a1a2af",
                        "colorImage": "/images/product/1000x1000.png",
                        "image": "/images/product/1000x1000.png"
                    }
                ],
                "thumbImage": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "images": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "description": "Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!",
                "action": "quick shop",
                "slug": "watch"
            },
            {
                "id": "116",
                "category": "watch",
                "type": "apple",
                "name": "apple watch",
                "gender": "men",
                "new": false,
                "sale": true,
                "rate": 5,
                "price": 100,
                "originPrice": 119,
                "brand": "apple",
                "sold": 24,
                "quantity": 80,
                "quantityPurchase": 1,
                "sizes": [
                    "18",
                    "20"
                ],
                "variation": [
                    {
                        "color": "black",
                        "colorCode": "#555",
                        "colorImage": "/images/product/1000x1000.png",
                        "image": "/images/product/1000x1000.png"
                    }
                ],
                "thumbImage": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "images": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "description": "Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!",
                "action": "add to cart",
                "slug": "watch"
            },
            {
                "id": "117",
                "category": "watch",
                "type": "smart",
                "name": "smart watch",
                "gender": "women",
                "new": false,
                "sale": true,
                "rate": 5,
                "price": 100,
                "originPrice": 119,
                "brand": "smart",
                "sold": 24,
                "quantity": 80,
                "quantityPurchase": 1,
                "sizes": [
                    "18",
                    "20"
                ],
                "variation": [
                    {
                        "color": "black",
                        "colorCode": "#555",
                        "colorImage": "/images/product/1000x1000.png",
                        "image": "/images/product/1000x1000.png"
                    }
                ],
                "thumbImage": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "images": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "description": "Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!",
                "action": "add to cart",
                "slug": "watch"
            },
            {
                "id": "118",
                "category": "watch",
                "type": "sport",
                "name": "sport watch",
                "gender": "men",
                "new": false,
                "sale": true,
                "rate": 5,
                "price": 100,
                "originPrice": 119,
                "brand": "sport",
                "sold": 24,
                "quantity": 80,
                "quantityPurchase": 1,
                "sizes": [
                    "18",
                    "20"
                ],
                "variation": [
                    {
                        "color": "black",
                        "colorCode": "#555",
                        "colorImage": "/images/product/1000x1000.png",
                        "image": "/images/product/1000x1000.png"
                    }
                ],
                "thumbImage": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "images": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "description": "Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!",
                "action": "quick shop",
                "slug": "watch"
            },
            {
                "id": "119",
                "category": "watch",
                "type": "apple",
                "name": "apple watch",
                "gender": "women",
                "new": true,
                "sale": false,
                "rate": 5,
                "price": 100,
                "originPrice": 119,
                "brand": "apple",
                "sold": 24,
                "quantity": 80,
                "quantityPurchase": 1,
                "sizes": [
                    "18",
                    "20"
                ],
                "variation": [
                    {
                        "color": "blue",
                        "colorCode": "#4856DA",
                        "colorImage": "/images/product/1000x1000.png",
                        "image": "/images/product/1000x1000.png"
                    },
                    {
                        "color": "black",
                        "colorCode": "#555",
                        "colorImage": "/images/product/1000x1000.png",
                        "image": "/images/product/1000x1000.png"
                    },
                    {
                        "color": "yellow",
                        "colorCode": "#ECB018",
                        "colorImage": "/images/product/1000x1000.png",
                        "image": "/images/product/1000x1000.png"
                    }
                ],
                "thumbImage": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "images": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "description": "Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!",
                "action": "quick shop",
                "slug": "watch"
            },
            {
                "id": "120",
                "category": "watch",
                "type": "fitness",
                "name": "fitness watch",
                "gender": "women",
                "new": false,
                "sale": true,
                "rate": 5,
                "price": 100,
                "originPrice": 119,
                "brand": "fitness",
                "sold": 24,
                "quantity": 80,
                "quantityPurchase": 1,
                "sizes": [
                    "18",
                    "20"
                ],
                "variation": [
                    {
                        "color": "black",
                        "colorCode": "#555",
                        "colorImage": "/images/product/1000x1000.png",
                        "image": "/images/product/1000x1000.png"
                    },
                    {
                        "color": "green",
                        "colorCode": "#D2EF9A",
                        "colorImage": "/images/product/1000x1000.png",
                        "image": "/images/product/1000x1000.png"
                    }
                ],
                "thumbImage": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "images": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "description": "Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!",
                "action": "add to cart",
                "slug": "watch"
            },
            {
                "id": "121",
                "category": "watch",
                "type": "luxury",
                "name": "luxury watch",
                "gender": "women",
                "new": true,
                "sale": false,
                "rate": 5,
                "price": 100,
                "originPrice": 119,
                "brand": "seiko",
                "sold": 24,
                "quantity": 80,
                "quantityPurchase": 1,
                "sizes": [
                    "18",
                    "20"
                ],
                "variation": [
                    {
                        "color": "red",
                        "colorCode": "#DA4848",
                        "colorImage": "/images/product/1000x1000.png",
                        "image": "/images/product/1000x1000.png"
                    },
                    {
                        "color": "blue",
                        "colorCode": "#4856DA",
                        "colorImage": "/images/product/1000x1000.png",
                        "image": "/images/product/1000x1000.png"
                    }
                ],
                "thumbImage": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "images": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "description": "Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!",
                "action": "add to cart",
                "slug": "watch"
            },
            {
                "id": "122",
                "category": "watch",
                "type": "sport",
                "name": "sport watch",
                "gender": "men",
                "new": false,
                "sale": true,
                "rate": 5,
                "price": 100,
                "originPrice": 119,
                "brand": "seiko",
                "sold": 24,
                "quantity": 80,
                "quantityPurchase": 1,
                "sizes": [
                    "18",
                    "20"
                ],
                "variation": [
                    {
                        "color": "red",
                        "colorCode": "#DA4848",
                        "colorImage": "/images/product/1000x1000.png",
                        "image": "/images/product/1000x1000.png"
                    },
                    {
                        "color": "black",
                        "colorCode": "#555",
                        "colorImage": "/images/product/1000x1000.png",
                        "image": "/images/product/1000x1000.png"
                    }
                ],
                "thumbImage": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "images": [
                    "/images/product/1000x1000.png",
                    "/images/product/1000x1000.png"
                ],
                "description": "Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!",
                "action": "quick shop",
                "slug": "watch"
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