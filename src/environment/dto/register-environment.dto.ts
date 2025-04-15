import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RegisterEnvironmentDto {

  @IsString()
  @IsOptional()
  ip: string;


  @IsString()
  @IsNotEmpty()
  serial_number: string;
}
