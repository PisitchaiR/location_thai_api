-- CreateTable
CREATE TABLE "Province" (
    "id" SERIAL NOT NULL,
    "province_thai" TEXT,
    "province_eng" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Province_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "District" (
    "id" SERIAL NOT NULL,
    "name_th" TEXT,
    "name_en" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "province_id" INTEGER,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sub_district" (
    "id" SERIAL NOT NULL,
    "name_th" TEXT,
    "name_en" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "zip_code" INTEGER NOT NULL,
    "district_id" INTEGER,

    CONSTRAINT "Sub_district_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Province_province_thai_key" ON "Province"("province_thai");

-- CreateIndex
CREATE UNIQUE INDEX "Province_province_eng_key" ON "Province"("province_eng");

-- CreateIndex
CREATE UNIQUE INDEX "District_name_th_key" ON "District"("name_th");

-- CreateIndex
CREATE UNIQUE INDEX "District_name_en_key" ON "District"("name_en");

-- CreateIndex
CREATE UNIQUE INDEX "Sub_district_name_th_key" ON "Sub_district"("name_th");

-- CreateIndex
CREATE UNIQUE INDEX "Sub_district_name_en_key" ON "Sub_district"("name_en");

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_province_id_fkey" FOREIGN KEY ("province_id") REFERENCES "Province"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sub_district" ADD CONSTRAINT "Sub_district_district_id_fkey" FOREIGN KEY ("district_id") REFERENCES "District"("id") ON DELETE SET NULL ON UPDATE CASCADE;
