import { Injectable } from '@nestjs/common';
import { Moment, Page } from './interfaces/moments';
import * as homeTimeline from "../resources/data.json";
import { MomentNotFound } from './exceptions/moment-not-found';

const momentsInDB = homeTimeline.comments;

@Injectable()
export class AppService {
  getMoments(query: Page): Moment[] {
      const { page, size } = query;
      if (!size) {
        return homeTimeline.comments;
      }
      return momentsInDB.slice(page * size, (page+1) * size);
  }

  getMomentsById(id: string): Moment {
    const moment = momentsInDB.find(moment => moment.id.toString() === id);
    if (!moment) {
      throw new MomentNotFound(`Moment not found for id: ${id}`);
    }
    return moment;
  }
}
