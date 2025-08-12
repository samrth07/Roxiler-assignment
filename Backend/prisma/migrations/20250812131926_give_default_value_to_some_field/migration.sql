/*
  Warnings:

  - You are about to drop the column `userId` on the `Store` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[OwnerId]` on the table `Store` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `OwnerId` to the `Store` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Store" DROP CONSTRAINT "Store_userId_fkey";

-- DropIndex
DROP INDEX "public"."Store_userId_key";

-- AlterTable
ALTER TABLE "public"."Rating" ALTER COLUMN "desc" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Store" DROP COLUMN "userId",
ADD COLUMN     "OwnerId" TEXT NOT NULL,
ALTER COLUMN "Rating" SET DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Store_OwnerId_key" ON "public"."Store"("OwnerId");

-- AddForeignKey
ALTER TABLE "public"."Store" ADD CONSTRAINT "Store_OwnerId_fkey" FOREIGN KEY ("OwnerId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
