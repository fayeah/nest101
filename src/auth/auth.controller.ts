import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { LoginStatus } from './login-status.interface';
import { LoginUserDto } from '../user/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public async login(@Body() loginUserDto: LoginUserDto): Promise<LoginStatus> {
    return await this.authService.login(loginUserDto);
  }
}
