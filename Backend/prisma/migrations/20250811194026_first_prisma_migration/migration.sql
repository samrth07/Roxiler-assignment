-- CreateEnum
CREATE TYPE "public"."Verdict" AS ENUM ('user', 'Owner', 'Administrator');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "public"."Verdict" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "addressId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Address" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "streat" TEXT NOT NULL,
    "pincode" TEXT NOT NULL,
    "State" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Store" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "Rating" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,
    "addressId" INTEGER NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Rating" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "storeId" INTEGER NOT NULL,
    "Rating" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_addressId_key" ON "public"."User"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "Store_email_key" ON "public"."Store"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Store_userId_key" ON "public"."Store"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Store_addressId_key" ON "public"."Store"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "Rating_userId_key" ON "public"."Rating"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Rating_storeId_key" ON "public"."Rating"("storeId");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Store" ADD CONSTRAINT "Store_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Store" ADD CONSTRAINT "Store_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Rating" ADD CONSTRAINT "Rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Rating" ADD CONSTRAINT "Rating_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "public"."Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
