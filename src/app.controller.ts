import { Body, Controller, Get, Param, Post, Query, UseGuards, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { Moment, TransformedPage } from './interfaces/moments';
import { CreateMomentDTO } from './dto/momentDto';
import { QueryToNumberPipe } from './pipes/query-to-number.pipe';
import { AuthGuard } from '@nestjs/passport';

@Controller("/moments")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UsePipes(new QueryToNumberPipe())
  @UseGuards(AuthGuard())
  async findMoments(@Query() query: TransformedPage): Promise<Moment[]> {
    return await this.appService.getMoments(query);
  }

  @Get(":id")
  async findMomentById(@Param('id') id: string): Promise<Moment> {
    return await this.appService.getMomentsById(id);
  }

  @Post()
  async create(@Body() createMomentDTO: CreateMomentDTO): Promise<number> {
    return await this.appService.create(createMomentDTO);
  }
}
