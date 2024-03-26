/*
  Warnings:

  - You are about to drop the `dreamGarage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "dreamGarage";

-- CreateTable
CREATE TABLE "vehicles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "cc" TEXT NOT NULL,
    "cylinder" INTEGER NOT NULL,
    "Price" TEXT NOT NULL,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id")
);
