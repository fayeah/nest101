import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { Page, TransformedPage } from '../interfaces/moments';
import { isNil } from '@nestjs/common/utils/shared.utils';

@Injectable()
export class QueryToNumberPipe implements PipeTransform<Page, TransformedPage> {
  transform(value: Page, metadata: ArgumentMetadata): TransformedPage {
    console.log("meta", metadata.type, value, typeof value);
    if (isNil(value)) {
      throw new BadRequestException('Validation failed');
    }
    if (value && metadata.type === 'query') {
      return ({
        page: parseInt(value.page, 10),
        size: parseInt(value.size, 10)
      })
    }
  }
}
