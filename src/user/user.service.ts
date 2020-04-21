import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {

  public async findUser( nric: string, mobileNumber: string) {
    const user = Promise.resolve({
      _id: '0000000000',
      nric: 'abcd',
      mobileNumber: '86984552'
    })
    if (user) {
      return user;
    }
    throw new HttpException("User not found", HttpStatus.NOT_FOUND)
  }

  async findByPayload({ _id }: any): Promise<UserDto> {
    return Promise.resolve({
      _id: '0000000000',
      nric: 'abcd',
      mobileNumber: '86984552'
    })
  }
}
