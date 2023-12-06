import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';
import { SecondComponent } from './second.component';
import { TranslateModuleChildFactory } from '../../utils/translateFactory';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SettingsService } from '../../core/settings.service';
import { I18nService } from '../../core/i18n.servcie';

const routes: Routes = [
  {
    path: '',
    component: SecondComponent,
    children: [
      {
        path: '',
        component: SecondPageComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [SecondComponent, SecondPageComponent],
  imports: [
    RouterModule.forChild(routes),
    TranslateModuleChildFactory('/second/'),
  ],
  exports: [RouterModule, TranslateModule],
  providers: [I18nService],
})
export class SecondModule {
  constructor(translate: TranslateService, settingsService: SettingsService) {
    translate.use(settingsService.get('lang'));
  }
}
