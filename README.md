# Online Ecommerce Web-App

A full stack ecommerce application. It uses Nextjs-13.4, Typescript, Sass, Nodejs, Prisma, Postgresql, Stripe, Next-Auth, and AWS-S3. It is deployed on https://easy-market-iota.vercel.app

Nextjs provides REST API (route handlers) where we can send queries and mutations to the data. Also utilizes the app-router and server-actions to work with backend process. Prisma client makes it convenient to do CRUD operations on Postgresql database. The user has to be logged in to edit, delete, or add an item to the cart. 

Once authenticated, it's possible to modify available products. The user can also post a new product for sale. The cart will contain the items that were added and is able to remove the items as well. Payment process is integrated with Stripe API and here's a sample card once you're ready to checkout: 4242424242424242 123 12345

---
![List of Items for sale](/nextjs-app/public/images/ecommerce.png "Items that are for sale")