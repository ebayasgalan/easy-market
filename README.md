# Online Ecommerce Web-App

A full stack ecommerce application. It uses Nextjs-13.4, Typescript, Styled-Components, Nodejs, Prisma, Postgresql, Stripe, Next-Auth, and AWS-S3.

Then Nextjs provides route-handler endpoints where we can send queries and mutations to the data. Also utilizes the app-router and server-actions to work with backend process. Prisma client makes it convenient to do CRUD operations on Postgresql database. The user has to be logged in to edit, delete, or add an item to the cart. 

Once authenticated, it's possible to modify available products. The user can also create a new product for sale. The cart will contain the items that were added and is able to remove the items as well. Checkout process is handled by Stripe API and you can use this sample card to complete the process: 4242424242424242 123 12345