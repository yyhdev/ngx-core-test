import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { LocaleFactory } from './localeFactory';
import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/core';
import { localeRoot } from '../app.module';

export function TranslateModuleRootFactory(): ModuleWithProviders<TranslateModule> {
  return TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: LocaleFactory(),
      deps: [HttpClient],
    },
    missingTranslationHandler: {
      provide: MissingTranslationHandler,
      useValue: {
        handle: ({ key }: { key: string }) => {
          return key;
        },
      },
    },
    isolate: true,
  });
}

export function TranslateModuleChildFactory(
  dirI18nPrefix = '/'
): ModuleWithProviders<TranslateModule> {
  return TranslateModule.forChild({
    loader: {
      provide: TranslateLoader,
      useFactory: LocaleFactory(dirI18nPrefix),
      deps: [HttpClient],
    },
    missingTranslationHandler: {
      provide: MissingTranslationHandler,
      useValue: {
        handle: ({ key, interpolateParams }: any) => {
          return localeRoot.instant(key, interpolateParams);
        },
      },
    },
    isolate: true,
  });
}
