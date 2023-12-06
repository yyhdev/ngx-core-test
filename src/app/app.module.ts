import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateService } from '@ngx-translate/core';
import { BasicLayoutComponent } from './components/basic/basic-layout.component';
import { ShareModule } from './modules/share/share.module';
import { TranslateModuleRootFactory } from './utils/translateFactory';
import { SettingsService } from './core/settings.service';
import { I18nService } from './core/i18n.servcie';

export let localeRoot: TranslateService;

@NgModule({
  declarations: [AppComponent, BasicLayoutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShareModule,
    TranslateModuleRootFactory(),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  providers: [SettingsService, I18nService],
})
export class AppModule {
  constructor(translate: TranslateService) {
    localeRoot = translate;
  }
}
