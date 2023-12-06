import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { localeRoot } from '../../../app.module';

@Pipe({
  name: 't',
})
export class TranslatePipe implements PipeTransform {
  constructor(private translate: TranslateService) {
    console.log(translate == localeRoot);
  }

  transform(query: string): any {
    console.log(query, this.translate.instant(query));
    return this.translate.instant(query);
  }
}
