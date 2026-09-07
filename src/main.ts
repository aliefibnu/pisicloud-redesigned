import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/configs/app.config';
import { App } from './app/app';
import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';

polyfillCountryFlagEmojis();
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
