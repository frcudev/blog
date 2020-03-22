import {Injectable} from '@angular/core';

export const LOCAL_STORAGE_KEY = 'frcu-dev-blog-com';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor() {}

  getSettings(): Settings | null {
    const localStorageItem = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!localStorageItem) {
      return null;
    }

    return JSON.parse(localStorageItem) || {};
  }

  updateSettings(update: Partial<Settings>) {
    const settings = this.getSettings();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({...settings, ...update}));
  }
}

export interface Settings {
  returnUrl: string;
}
