# Online Ecommerce Web-App

A full stack ecommerce application. It uses Keystone6 to generate graphql schema based off of the data within the app. Then nextjs provides an api-endpoint where we can send queries and mutations to the data. I'm using postgresql as the database and Apollo Client as the frontend state management.  

The user can signin, signup, or request password reset. Once signed in, it's possible to see a list of available products for sale. The user can create a product for sale, edit or delete it. The cart will contain the items that were added and is able to remove selected item as well. 

It uses Nextjs and Apollo Client on the frontend. Nodejs, Keystonejs CMS, Stripe API and AWS S3 on the backend. 