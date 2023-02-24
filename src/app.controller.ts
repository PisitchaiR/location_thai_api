import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { District, Province, SubDistrict } from './dto/app.dto';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/provinces')
  async getHello(): Promise<Province[]> {
    return await this.appService.getProvince();
  }

  @Get('/provinces/:id/districts')
  async getProvinceById(@Param('id') id: number): Promise<Province> {
    return await this.appService.getDistrictByProvinceId(id);
  }

  @Get('/districts')
  async getDistrict(): Promise<District[]> {
    return await this.appService.getDistrict();
  }

  @Get('/districts/:id/sub-districts')
  async getSubDistrictByDistrictId(@Param('id') id: number): Promise<District> {
    return await this.appService.getSubDistrictByDistrictId(id);
  }

  @Get('/sub-districts')
  async getSubDistrict(): Promise<SubDistrict[]> {
    return await this.appService.getSubDistrict();
  }
}
