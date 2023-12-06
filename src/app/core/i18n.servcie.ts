import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class I18nService {
  constructor(private translate: TranslateService) {}

  fanyi(key: string, interpolateParams?: object): any {
    return this.translate.instant(key, interpolateParams);
  }
}
