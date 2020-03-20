import { HttpException, HttpStatus } from '@nestjs/common';

export class MomentNotFound extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.NOT_FOUND);
  }
}
