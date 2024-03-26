-- CreateTable
CREATE TABLE "dreamGarage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "cc" TEXT NOT NULL,
    "cylinder" INTEGER NOT NULL,
    "Price" TEXT NOT NULL,

    CONSTRAINT "dreamGarage_pkey" PRIMARY KEY ("id")
);
