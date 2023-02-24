import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import province from '../asset/province.json';
import district from '../asset/district.json';
import subDistrict from '../asset/subDistrict.json';

async function main() {
  province.map(async (province) => {
    console.log(province);
    await prisma.province.create({
      data: {
        id: province.id,
        nameTh: province.name_th,
        nameEn: province.name_en,
      },
    });
  });
  district.map(async (district) => {
    await prisma.district.create({
      data: {
        id: district.id,
        nameTh: district.name_th,
        nameEn: district.name_en,
        provinceId: district.province_id,
      },
    });
  });
  subDistrict.map(async (subDistrict) => {
    console.log(subDistrict);
    await prisma.subDistrict.create({
      data: {
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
