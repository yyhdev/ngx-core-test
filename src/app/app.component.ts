import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from './core/i18n.servcie';
import { SettingsService } from './core/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-page-title-translate';
  page = '1';

  constructor(
    private translate: TranslateService,
    private _i18n: I18nService,
    public settingsService: SettingsService
  ) {
    translate.setDefaultLang('zh-CN');
    translate.use(settingsService.get('lang'));
  }

  changeLanguage(lang: any): void {
    this.settingsService.set('lang', lang);
    location.reload()
  }

  fanyi() {
    console.log(this._i18n.fanyi('TOOLBAR.WELCOME'));
  }
}
