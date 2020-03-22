import { Injectable } from '@nestjs/common';
import { Moment, TransformedPage } from './interfaces/moments';
import * as homeTimeline from '../resources/data.json';
import { MomentNotFound } from './exceptions/moment-not-found';
import { CreateMomentDTO } from './dto/momentDto';

const momentsInDB = homeTimeline.comments;

@Injectable()
export class AppService {
  async getMoments(query: TransformedPage): Promise<Moment[]> {
      const { page, size } = query;
      if (!size) {
        return homeTimeline.comments;
      }
      return Promise.resolve(momentsInDB.slice(page * size, (page+1) * size));
  }

  async getMomentsById(id: string): Promise<Moment> {
    const moment = momentsInDB.find(moment => moment.id.toString() === id);
    if (!moment) {
      throw new MomentNotFound(`Moment not found for id: ${id}`);
    }
    return Promise.resolve(moment);
  }

  async create(createMomentDTO: CreateMomentDTO): Promise<number>{
    return Promise.resolve(-1);
  }
}
