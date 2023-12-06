import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function LocaleFactory(
  dirI18nPrefix = '/'
): (http: HttpClient) => TranslateHttpLoader {
  return function (http: HttpClient): TranslateHttpLoader {
    const path = './assets/i18n' + dirI18nPrefix;
    console.log(path, `load locale file: ${path}[lang].json`);
    return new TranslateHttpLoader(http, path, '.json');
  };
}
