import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { FirstComponent } from './first.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ShareModule } from '../share/share.module';
import { TranslateModuleChildFactory } from '../../utils/translateFactory';
import { SettingsService } from '../../core/settings.service';
import { I18nService } from '../../core/i18n.servcie';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
    children: [
      {
        path: '',
        component: FirstPageComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [FirstComponent, FirstPageComponent],
  imports: [
    RouterModule.forChild(routes),
    TranslateModuleChildFactory('/first/'),
    ShareModule,
  ],
  exports: [RouterModule, TranslateModule],
  providers: [I18nService],
})
export class FirstModule {
  constructor(translate: TranslateService, settingsService: SettingsService) {
    translate.use(settingsService.get('lang'));
  }
}
