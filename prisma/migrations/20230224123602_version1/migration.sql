/*
  Warnings:

  - Made the column `name_th` on table `District` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name_en` on table `District` required. This step will fail if there are existing NULL values in that column.
  - Made the column `province_id` on table `District` required. This step will fail if there are existing NULL values in that column.
  - Made the column `province_thai` on table `Province` required. This step will fail if there are existing NULL values in that column.
  - Made the column `province_eng` on table `Province` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name_th` on table `Sub_district` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name_en` on table `Sub_district` required. This step will fail if there are existing NULL values in that column.
  - Made the column `district_id` on table `Sub_district` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "District" DROP CONSTRAINT "District_province_id_fkey";

-- DropForeignKey
ALTER TABLE "Sub_district" DROP CONSTRAINT "Sub_district_district_id_fkey";

-- DropIndex
DROP INDEX "District_name_en_key";

-- DropIndex
DROP INDEX "District_name_th_key";

-- DropIndex
DROP INDEX "Sub_district_name_en_key";

-- DropIndex
DROP INDEX "Sub_district_name_th_key";

-- AlterTable
ALTER TABLE "District" ALTER COLUMN "name_th" SET NOT NULL,
ALTER COLUMN "name_en" SET NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP NOT NULL,
ALTER COLUMN "province_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "Province" ALTER COLUMN "province_thai" SET NOT NULL,
ALTER COLUMN "province_eng" SET NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Sub_district" ALTER COLUMN "name_th" SET NOT NULL,
ALTER COLUMN "name_en" SET NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP NOT NULL,
ALTER COLUMN "district_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_province_id_fkey" FOREIGN KEY ("province_id") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sub_district" ADD CONSTRAINT "Sub_district_district_id_fkey" FOREIGN KEY ("district_id") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
