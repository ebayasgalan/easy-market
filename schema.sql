DROP DATABASE IF EXISTS ecommerce_watches;
CREATE DATABASE ecommerce_watches;

\c ecommerce_watches;

CREATE SCHEMA inventory;

CREATE TABLE users (
  user_id serial PRIMARY KEY,
  user_name varchar(100) UNIQUE,
  email varchar(100) UNIQUE,
  password_hash varchar(150),
  user_address varchar(200)
);

CREATE TABLE orders (
  order_id serial PRIMARY KEY,
  total integer,
  user_id integer,
  FOREIGN KEY(user_id) REFERENCES users (user_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE order_items (
  item_id serial PRIMARY KEY,
  product_type varchar(60),
  product_name varchar(100),
  gender varchar(60),
  new boolean,
  sale boolean,
  rate integer,
  price integer,
  origin_price integer,
  brand varchar(60),
  sold integer,
  quantity integer,
  quantity_purchase integer,
  sizes text[],
  thumb_image text[],
  images text[],
  product_description varchar(250),
  product_action varchar(80),
  order_id integer,
  FOREIGN KEY(order_id) REFERENCES orders (order_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE INDEX ON order_items (order_id);

CREATE TABLE inventory.products (
  product_id serial PRIMARY KEY,
  product_type varchar(60),
  product_name varchar(100),
  gender varchar(60),
  new boolean,
  sale boolean,
  rate integer,
  price integer,
  origin_price integer,
  brand varchar(60),
  sold integer,
  quantity integer,
  quantity_purchase integer,
  sizes text[],
  thumb_image text[],
  images text[],
  product_description varchar(250),
  product_action varchar(80)
);

CREATE TABLE inventory.variations (
  variation_id serial PRIMARY KEY,
  color varchar(50),
  color_code varchar(50),
  color_image varchar(80),
  alt_image varchar(80),
  product_id integer,
  FOREIGN KEY(product_id) REFERENCES inventory.products (product_id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Inserting a demo user 
INSERT INTO users(user_id, user_name, email, password_hash, user_address) VALUES (1, 'Demo User', 'demoUser@gmail.com', '4BQpPUdumANoDFomZC1skO4kog7a65TQqP3sJiW6JP9HQleHgf70e', '5116 Main st, Evanston IL');

-- Inserting products 
INSERT INTO inventory.products(product_id, product_type, product_name, gender, new, sale, rate, price, origin_price, brand, sold, quantity, quantity_purchase, sizes, thumb_image, images, product_description, product_action) 
    VALUES (113, 'classic', 'classic seiko', 'men', TRUE, FALSE, 5, 120, 139, 'seiko', 24, 80, 1, ARRAY ['18', '20'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png', '/images/product/1000x1000.png'], 'Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!', 'add to cart');

INSERT INTO inventory.products(product_id, product_type, product_name, gender, new, sale, rate, price, origin_price, brand, sold, quantity, quantity_purchase, sizes, thumb_image, images, product_description, product_action) 
    VALUES (114, 'classic', 'classic seiko women', 'men', TRUE, FALSE, 5, 110, 129, 'seiko', 15, 80, 1, ARRAY ['14', '16'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png', '/images/product/1000x1000.png'], 'Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!', 'quick shop');

INSERT INTO inventory.products(product_id, product_type, product_name, gender, new, sale, rate, price, origin_price, brand, sold, quantity, quantity_purchase, sizes, thumb_image, images, product_description, product_action) 
    VALUES (115, 'luxury', 'luxury seiko', 'men', TRUE, FALSE, 5, 120, 139, 'seiko', 24, 80, 1, ARRAY ['18', '20'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png', '/images/product/1000x1000.png'], 'Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!', 'quick shop');

INSERT INTO inventory.products(product_id, product_type, product_name, gender, new, sale, rate, price, origin_price, brand, sold, quantity, quantity_purchase, sizes, thumb_image, images, product_description, product_action) 
    VALUES (116, 'apple', 'apple watch', 'men', FALSE, TRUE, 5, 100, 119, 'apple', 24, 80, 1, ARRAY ['18', '20'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png', '/images/product/1000x1000.png'], 'Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!', 'add to cart');

INSERT INTO inventory.products(product_id, product_type, product_name, gender, new, sale, rate, price, origin_price, brand, sold, quantity, quantity_purchase, sizes, thumb_image, images, product_description, product_action) 
    VALUES (117, 'smart', 'smart watch', 'women', FALSE, TRUE, 5, 100, 119, 'smart', 24, 80, 1, ARRAY ['18', '20'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png', '/images/product/1000x1000.png'], 'Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!', 'add to cart');

INSERT INTO inventory.products(product_id, product_type, product_name, gender, new, sale, rate, price, origin_price, brand, sold, quantity, quantity_purchase, sizes, thumb_image, images, product_description, product_action) 
    VALUES (118, 'sport', 'sport watch', 'men', FALSE, TRUE, 5, 100, 119, 'sport', 24, 80, 1, ARRAY ['18', '20'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png', '/images/product/1000x1000.png'], 'Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!', 'quick shop');

INSERT INTO inventory.products(product_id, product_type, product_name, gender, new, sale, rate, price, origin_price, brand, sold, quantity, quantity_purchase, sizes, thumb_image, images, product_description, product_action) 
    VALUES (119, 'apple', 'apple watch', 'women', TRUE, FALSE, 5, 100, 119, 'apple', 24, 80, 1, ARRAY ['18', '20'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png', '/images/product/1000x1000.png'], 'Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!', 'quick shop');

INSERT INTO inventory.products(product_id, product_type, product_name, gender, new, sale, rate, price, origin_price, brand, sold, quantity, quantity_purchase, sizes, thumb_image, images, product_description, product_action) 
    VALUES (120, 'fitness', 'fitness watch', 'women', FALSE, TRUE, 5, 100, 119, 'fitness', 24, 80, 1, ARRAY ['18', '20'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png', '/images/product/1000x1000.png'], 'Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!', 'add to cart');

INSERT INTO inventory.products(product_id, product_type, product_name, gender, new, sale, rate, price, origin_price, brand, sold, quantity, quantity_purchase, sizes, thumb_image, images, product_description, product_action) 
    VALUES (121, 'luxury', 'luxury watch', 'women', TRUE, FALSE, 5, 100, 119, 'seiko', 24, 80, 1, ARRAY ['18', '20'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png', '/images/product/1000x1000.png'], 'Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!', 'add to cart');

INSERT INTO inventory.products(product_id, product_type, product_name, gender, new, sale, rate, price, origin_price, brand, sold, quantity, quantity_purchase, sizes, thumb_image, images, product_description, product_action) 
    VALUES (122, 'sport', 'sport watch', 'men', FALSE, TRUE, 5, 100, 119, 'seiko', 24, 80, 1, ARRAY ['18', '20'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png'], ARRAY ['/images/product/1000x1000.png', '/images/product/1000x1000.png', '/images/product/1000x1000.png'], 'Keep your home organized, yet elegant with storage cabinets by Onita Patio watch. Traditionally designed, they are perfect to be used in the any place where you need to store. Bring one-of-a-kind look to your interior with watch from Onita watch!', 'quick shop');

-- Inserting variations 
INSERT INTO inventory.variations(variation_id, color, color_code, color_image, alt_image, product_id) 
    VALUES (1, 'red', '#DA4848', '/images/product/1000x1000.png', '/images/product/1000x1000.png', 113);
INSERT INTO inventory.variations(variation_id, color, color_code, color_image, alt_image, product_id) 
    VALUES (2, 'blue', '#4856DA', '/images/product/1000x1000.png', '/images/product/1000x1000.png', 113);

INSERT INTO inventory.variations(variation_id, color, color_code, color_image, alt_image, product_id) 
    VALUES (3, 'red', '#DA4848', '/images/product/1000x1000.png', '/images/product/1000x1000.png', 114);
INSERT INTO inventory.variations(variation_id, color, color_code, color_image, alt_image, product_id) 
    VALUES (4, 'blue', '#4856DA', '/images/product/1000x1000.png', '/images/product/1000x1000.png', 114);

INSERT INTO inventory.variations(variation_id, color, color_code, color_image, alt_image, product_id) 
    VALUES (5, 'red', '#DA4848', '/images/product/1000x1000.png', '/images/product/1000x1000.png', 115);
INSERT INTO inventory.variations(variation_id, color, color_code, color_image, alt_image, product_id) 
    VALUES (6, 'silver', '#a1a2af', '/images/product/1000x1000.png', '/images/product/1000x1000.png', 115);

INSERT INTO inventory.variations(variation_id, color, color_code, color_image, alt_image, product_id) 
    VALUES (7, 'black', '#555', '/images/product/1000x1000.png', '/images/product/1000x1000.png', 116);

INSERT INTO inventory.variations(variation_id, color, color_code, color_image, alt_image, product_id) 
    VALUES (8, 'black', '#555', '/images/product/1000x1000.png', '/images/product/1000x1000.png', 117);

INSERT INTO inventory.variations(variation_id, color, color_code, color_image, alt_image, product_id) 
    VALUES (9, 'black', '#555', '/images/product/1000x1000.png', '/images/product/1000x1000.png', 118);

INSERT INTO inventory.variations(variation_id, color, color_code, color_image, alt_image, product_id) 
    VALUES (10, 'blue', '#4856DA', '/images/product/1000x1000.png', '/images/product/1000x1000.png', 119);
INSERT INTO inventory.variations(variation_id, color, color_code, color_image, alt_image, product_id) 
    VALUES (11, 'black', '#555', '/images/product/1000x1000.png', '/images/product/1000x1000.png', 119);
INSERT INTO inventory.variations(variation_id, color, color_code, color_image, alt_image, product_id) 
    VALUES (12, 'yellow', '#ECB018', '/images/product/1000x1000.png', '/images/product/1000x1000.png', 119);


INSERT INTO inventory.variations(variation_id, color, color_code, color_image, alt_image, product_id) 
    VALUES (13, 'black', '#555', '/images/product/1000x1000.png', '/images/product/1000x1000.png', 120);
INSERT INTO inventory.variations(variation_id, color, color_code, color_image, alt_image, product_id) 
    VALUES (14, 'green', '#D2EF9A', '/images/product/1000x1000.png', '/images/product/1000x1000.png', 120);

INSERT INTO inventory.variations(variation_id, color, color_code, color_image, alt_image, product_id) 
    VALUES (15, 'red', '#DA4848', '/images/product/1000x1000.png', '/images/product/1000x1000.png', 121);
INSERT INTO inventory.variations(variation_id, color, color_code, color_image, alt_image, product_id) 
    VALUES (16, 'blue', '#4856DA', '/images/product/1000x1000.png', '/images/product/1000x1000.png', 121);

INSERT INTO inventory.variations(variation_id, color, color_code, color_image, alt_image, product_id) 
    VALUES (17, 'red', '#DA4848', '/images/product/1000x1000.png', '/images/product/1000x1000.png', 122);
INSERT INTO inventory.variations(variation_id, color, color_code, color_image, alt_image, product_id) 
    VALUES (18, 'black', '#555', '/images/product/1000x1000.png', '/images/product/1000x1000.png', 122);