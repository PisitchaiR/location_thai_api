import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import province from '../asset/province.json';
import district from '../asset/district.json';
import subDistrict from '../asset/subDistrict.json';

async function main() {
  province.map(async (province) => {
    console.log(province);
    await prisma.province.upsert({
      where: {
        id: province.id,
      },
      update: {
        id: province.id,
        nameTh: province.name_th,
        nameEn: province.name_en,
      },
      create: {
        id: province.id,
        nameTh: province.name_th,
        nameEn: province.name_en,
      },
    });
  });
  district.map(async (district) => {
    await prisma.district.upsert({
      where: {
        id: district.id,
      },
      update: {
        id: district.id,
        nameTh: district.name_th,
        nameEn: district.name_en,
        provinceId: district.province_id,
      },
      create: {
        id: district.id,
        nameTh: district.name_th,
        nameEn: district.name_en,
        provinceId: district.province_id,
      },
    });
  });
  subDistrict.map(async (subDistrict) => {
    console.log(subDistrict);
    await prisma.subDistrict.upsert({
      where: {
        id: subDistrict.id,
      },
      create: {
        id: subDistrict.id,
        nameTh: subDistrict.name_th,
        nameEn: subDistrict.name_en,
        districtId: subDistrict.district_id,
        zipCode: subDistrict.zip_code,
      },
      update: {
        id: subDistrict.id,
        nameTh: subDistrict.name_th,
        nameEn: subDistrict.name_en,
        districtId: subDistrict.district_id,
        zipCode: subDistrict.zip_code,
      },
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
