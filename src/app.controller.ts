import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Moment, Page } from './interfaces/moments';

@Controller("/moments")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findMoments(@Query() query: Page): Moment[] {
    return this.appService.getMoments(query);
  }

  @Get(":id")
  findMomentById(@Param('id') id: string): Moment {
    return this.appService.getMomentsById(id);
  }
}
