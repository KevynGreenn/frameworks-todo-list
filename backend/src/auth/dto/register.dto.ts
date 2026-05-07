import { IsOptional, IsString } from 'class-validator';

//aaaaaaaaaaaa
export class RegisterDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
