import { Injectable } from '@angular/core';

interface Settings {
  lang: 'zh-CN' | 'en-US';
}

@Injectable()
export class SettingsService {
  private readonly settings: Settings = {
    lang: 'zh-CN',
  };

  constructor() {
    const localValue = localStorage.getItem('settings');
    if (localValue) {
      this.settings = JSON.parse(localValue);
    }
  }

  set<K extends keyof Settings>(settingKey: K, value: Settings[K]): void {
    this.settings[settingKey] = value;
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  get<K extends keyof Settings>(settingKey: K): Settings[K] {
    return this.settings[settingKey];
  }
}
