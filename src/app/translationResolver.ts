import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {LanguageService} from "./language.service";
import {loadTranslations} from "@angular/localize";

@Injectable({
  providedIn: 'root'
})
export class TranslationResolver implements Resolve<boolean> {
  constructor(private languageService: LanguageService) {}

  resolve(): Promise<boolean> {
    const languageCode = this.getLocaleFromLocalStorage();
    return this.initializeLanguage(languageCode);
  }

  private getLocaleFromLocalStorage(): any {
    return this.languageService.language;
  }

  // load language file based on local storage value
  private initializeLanguage(languageCode: string): Promise<boolean>{
    return fetch(`/assets/messages.${languageCode}.json`)
      .then((res) => res.json())
      .then((res) => {
        this.languageService.language = languageCode;
        loadTranslations(res);
      })
      .then(()=> true);
  }
}
