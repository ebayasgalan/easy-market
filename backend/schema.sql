\c products;

COPY table_name [ ( column_name [, ...] ) ]
    FROM { 'filename' | PROGRAM 'command' | STDIN }
    [ [ WITH ] ( option [, ...] ) ]
    [ WHERE condition ]

COPY { table_name [ ( column_name [, ...] ) ] | ( query ) }
    TO { 'filename' | PROGRAM 'command' | STDOUT }
    [ [ WITH ] ( option [, ...] ) ]

-- COPY products (product_name, num_pictures, num_tags, price) 
-- FROM '/Users/Taivnaa/Desktop/hack-reactor/SDC/similar-products/database/products.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY pictures (color, img, product_id)
-- FROM '/Users/Taivnaa/Desktop/hack-reactor/SDC/similar-products/database/pictures.csv'
-- DELIMITER ','
-- CSV HEADER;
