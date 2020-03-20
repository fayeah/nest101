import { Injectable } from '@nestjs/common';
import { Moment, Page } from './interfaces/moments';
import * as homeTimeline from "../resources/data.json";


@Injectable()
export class AppService {
  getMoments(query: Page): Moment[] {
      const moments = homeTimeline.comments;
      const { page, size } = query;
      if (!size) {
        return homeTimeline.comments;
      }
      return moments.slice(page * size, (page+1) * size);
  }
}
