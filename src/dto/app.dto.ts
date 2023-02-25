import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class Province {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  nameEn: string;

  @ApiProperty()
  @IsString()
  nameTh: string;

  @ApiProperty()
  @IsString()
  district?: District[];
}

export class District {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  nameEn: string;

  @ApiProperty()
  @IsString()
  nameTh: string;

  @ApiProperty()
  @IsString()
  provinceId?: number;

  @ApiProperty()
  subDistrict?: SubDistrict[];
}

export class SubDistrict {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  nameEn: string;

  @ApiProperty()
  @IsString()
  nameTh: string;

  @ApiProperty()
  @IsString()
  zipCode?: string;

  @ApiProperty()
  districtId?: number;
}
