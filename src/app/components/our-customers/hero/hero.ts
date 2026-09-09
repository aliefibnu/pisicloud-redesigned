import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapArrowRight,
  bootstrapShieldCheck,
  bootstrapAwardFill,
  bootstrapPeopleFill,
  bootstrapTelephoneFill,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'customers-hero',
  imports: [NgOptimizedImage, TranslatePipe, MatButtonModule, NgIcon],
  viewProviders: [
    provideIcons({
      bootstrapArrowRight,
      bootstrapShieldCheck,
      bootstrapAwardFill,
      bootstrapPeopleFill,
      bootstrapTelephoneFill,
    }),
  ],
  templateUrl: './hero.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class CustomersHero {}
