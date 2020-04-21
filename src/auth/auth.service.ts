import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginUserDto, UserDto } from '../user/user.dto';
import { LoginStatus } from './login-status.interface';
import { JwtPayload } from './payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {
    const user = await this.usersService.findUser(loginUserDto.nric, loginUserDto.mobileNumber);
    const token = this._createToken(user);

    return {
      ...token,
    };
  }

  async validateUser(payload: JwtPayload): Promise<UserDto> {
    const user = await this.usersService.findByPayload(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  private _createToken({ _id }: UserDto): any {
    const expiresIn = process.env.EXPIRESIN;

    const user: JwtPayload = { _id };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn,
      accessToken,
    };
  }
}
