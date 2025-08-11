/*
  Warnings:

  - You are about to drop the column `addressId` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the column `addressId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Address` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[storeId]` on the table `Address` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."Store" DROP CONSTRAINT "Store_addressId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_addressId_fkey";

-- DropIndex
DROP INDEX "public"."Store_addressId_key";

-- DropIndex
DROP INDEX "public"."User_addressId_key";

-- AlterTable
ALTER TABLE "public"."Address" ADD COLUMN     "storeId" INTEGER,
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "public"."Store" DROP COLUMN "addressId";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "addressId";

-- CreateIndex
CREATE UNIQUE INDEX "Address_userId_key" ON "public"."Address"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_storeId_key" ON "public"."Address"("storeId");

-- AddForeignKey
ALTER TABLE "public"."Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Address" ADD CONSTRAINT "Address_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "public"."Store"("id") ON DELETE SET NULL ON UPDATE CASCADE;
