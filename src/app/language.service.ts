import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public static LOCAL_STORAGE_KEY = 'languageCode';

  public set language(locale: string) {
    localStorage.setItem(LanguageService.LOCAL_STORAGE_KEY, locale);
  }

  public get language(): string {
    return localStorage.getItem(LanguageService.LOCAL_STORAGE_KEY) as string;
  }
}
