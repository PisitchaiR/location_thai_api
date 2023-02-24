import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async getProvince(): Promise<any[]> {
    try {
      return await this.prisma.province.findMany({
        select: {
          id: true,
          nameEn: true,
          nameTh: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async getDistrictByProvinceId(id: number): Promise<any> {
    try {
      const districtInProvince = await this.prisma.province.findUniqueOrThrow({
        where: {
          id: Number(id),
        },
        select: {
          id: true,
          nameEn: true,
          nameTh: true,
          district: {
            select: {
              id: true,
              nameEn: true,
              nameTh: true,
            },
          },
        },
      });
      return districtInProvince;
    } catch (error) {
      throw error;
    }
  }

  async getDistrict(): Promise<any[]> {
    try {
      return await this.prisma.district.findMany({
        select: {
          id: true,
          nameEn: true,
          nameTh: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async getSubDistrictByDistrictId(id: number): Promise<any> {
    try {
      const subDistrictInDistrict =
        await this.prisma.district.findUniqueOrThrow({
          where: {
            id: Number(id),
          },
          select: {
            id: true,
            nameEn: true,
            nameTh: true,
            subDistrict: {
              select: {
                id: true,
                nameEn: true,
                nameTh: true,
                zipCode: true,
              },
            },
          },
        });
      return subDistrictInDistrict;
    } catch (error) {
      throw error;
    }
  }

  async getSubDistrict(): Promise<any[]> {
    try {
      return await this.prisma.subDistrict.findMany({
        select: {
          id: true,
          nameEn: true,
          nameTh: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
