import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class Province {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nameEn: string;

  @ApiProperty()
  nameTh: string;

  @ApiProperty()
  district?: District[];
}

export class District {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nameEn: string;

  @ApiProperty()
  nameTh: string;

  @ApiProperty()
  provinceId?: number;

  @ApiProperty()
  subDistrict?: SubDistrict[];
}

export class SubDistrict {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nameEn: string;

  @ApiProperty()
  nameTh: string;

  @ApiProperty()
  zipCode?: string;

  @ApiProperty()
  districtId?: number;
}
