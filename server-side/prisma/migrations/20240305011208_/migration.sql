/*
  Warnings:

  - You are about to drop the column `Price` on the `vehicles` table. All the data in the column will be lost.
  - Added the required column `price` to the `vehicles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "vehicles" DROP COLUMN "Price",
ADD COLUMN     "price" TEXT NOT NULL;
