import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { District, Province, SubDistrict } from './dto/app.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('/api')
@ApiTags('location')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/provinces')
  @ApiOkResponse({
    type: [Province],
  })
  async getProvinces(): Promise<Province[]> {
    return await this.appService.getProvince();
  }

  @Get('/province/:id/districts')
  @ApiOkResponse({
    type: Province,
  })
  async getProvinceById(@Param('id') id: number): Promise<Province> {
    return await this.appService.getDistrictByProvinceId({ id: Number(id) });
  }

  @Get('/districts')
  @ApiOkResponse({
    type: District,
  })
  async getDistrict(): Promise<District[]> {
    return await this.appService.getDistrict();
  }

  @Get('/district/:id/sub-districts')
  @ApiOkResponse({
    type: District,
  })
  async getSubDistrictByDistrictId(@Param('id') id: number): Promise<District> {
    return await this.appService.getSubDistrictByDistrictId({ id: Number(id) });
  }

  @Get('/sub-districts')
  @ApiOkResponse({
    type: SubDistrict,
  })
  async getSubDistrict(): Promise<SubDistrict[]> {
    return await this.appService.getSubDistrict();
  }
}
