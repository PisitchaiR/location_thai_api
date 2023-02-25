import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { Province, District, SubDistrict } from './dto/app.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getProvince(): Promise<Province[]> {
    try {
      const province = await this.prisma.province.findMany({
        select: {
          id: true,
          nameEn: true,
          nameTh: true,
        },
      });
      return province;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'bad request',
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }

  async getDistrictByProvinceId({ id }: { id: number }): Promise<Province> {
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
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'bad request',
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }

  async getDistrict(): Promise<District[]> {
    try {
      return await this.prisma.district.findMany({
        select: {
          id: true,
          nameEn: true,
          nameTh: true,
        },
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'bad request',
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }

  async getSubDistrictByDistrictId({
    id,
  }: {
    id: number;
  }): Promise<SubDistrict> {
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
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'bad request',
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }

  async getSubDistrict(): Promise<SubDistrict[]> {
    try {
      return await this.prisma.subDistrict.findMany({
        select: {
          id: true,
          nameEn: true,
          nameTh: true,
        },
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'bad request',
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }
}
