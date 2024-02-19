# Hello 👋 

This is a full-stack ecommerce web application that is built with Nextjs, Typescript, Sass, Nodejs, Prisma, Postgresql, Stripe, Next-Auth, and AWS. It is deployed on https://easy-market-iota.vercel.app

Nextjs provides route handlers, making it possible to send queries and mutations to the data. The app-router and server-actions are utilized to work with backend processes. Prisma client makes it convenient to do CRUD operations on Postgresql database. The user has to be authenticated to edit, delete, or add an item to the cart. 

Once logged in, the user can post a new product for sale. The cart will contain the items that got added and can edit them as well. Payment process is integrated with Stripe API and here's a sample card once you're ready to checkout: 4242424242424242 123 12345

![List of Items for sale](/nextjs-app/public/images/ecommerce.png "Items that are for sale")
![Version](https://img.shields.io/badge/version-1.6.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

---

## Table of Contents
  - [Technology Stack](#technology-stack)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#run-tests)
  - [Contributing](#contributing)
  - [License](#license)

## Tech Stack

| Technology   | Description                        |
| ------------ | ---------------------------------- |
| NextJS       | React framework                    |
| Typescript   | Superset of Javascript             |
| PostgreSQL   | Relational database                |
| Prisma       | ORM (Object Relational Mapping)    |
| Sass         | CSS preprocessor                   |
| AWS-S3       | Cloud storage system               |
| Vercel       | Deployment platform                |

## Installation

```sh
npm install 
```

## Usage

```sh
npm start
```

## Run tests

```sh
npm test 
```
## Contributing

Contributions are welcome! Please follow these steps: 
1. Fork it (https://github.com/ebayasgalan/easy-market/fork)
2. Create your feature branch (git checkout -b feature/fooBar)
3. Commit your changes (git commit -m 'Add some fooBar')
4. Push to the branch (git push origin feature/fooBar)
5. Create a new Pull Request

## License
MIT