import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { localeRoot } from '../../../app.module';
import { I18nService } from '../../../core/i18n.servcie';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
})
export class FirstPageComponent {
  constructor(private _i18n: I18nService) {
    console.log(this._i18n.fanyi('title'));
    console.log(this._i18n.fanyi('TOOLBAR.WELCOME'));
  }

  fanyi(key: string) {
    console.log(this._i18n.fanyi(key));
  }
}
