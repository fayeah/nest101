import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UserDto {
  _id: string;
  @IsNotEmpty()
  mobileNumber: string;

  @IsNotEmpty()
  nric: string;
}

export class LoginUserDto {
  @IsNotEmpty()
  @IsString()
  mobileNumber: string;
  @IsNotEmpty()
  @IsString()
  nric: string;
}
