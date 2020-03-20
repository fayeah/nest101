import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Moment, Page } from './interfaces/moments';

@Controller("/moments")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() query: Page): Moment[] {
    return this.appService.getMoments(query);
  }
}
