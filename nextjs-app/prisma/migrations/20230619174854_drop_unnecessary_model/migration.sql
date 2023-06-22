/*
  Warnings:

  - You are about to drop the `ProductImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_photo_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_photo_fkey";

-- DropIndex
DROP INDEX "OrderItem_photo_idx";

-- DropIndex
DROP INDEX "Product_photo_key";

-- DropTable
DROP TABLE "ProductImage";
