import { Component } from '@angular/core';
import { I18nService } from '../../../core/i18n.servcie';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css'],
})
export class SecondPageComponent {
  constructor(private _i18n: I18nService) {
    console.log(this._i18n.fanyi('title'));
    console.log(this._i18n.fanyi('TOOLBAR.WELCOME'));
  }

  fanyi(key: string) {
    console.log(this._i18n.fanyi(key));
  }
}
