import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { firstValueFrom, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { routes } from '../routes/app.routes';
import { LanguageService } from '../core/language.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideTranslateService({
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        prefix: './i18n/',
        suffix: '.json',
      }),
    }),
    provideAppInitializer(() => {
      const languageService = inject(LanguageService);
      return firstValueFrom(
        languageService.init().pipe(
          catchError((err) => {
            console.error('Failed to load translations during app init', err);
            return of(null);
          }),
        ),
      );
    }),
  ],
};
