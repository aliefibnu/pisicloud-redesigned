import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapShieldCheck } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'customers-hero',
  imports: [NgOptimizedImage, TranslatePipe, NgIcon],
  viewProviders: [
    provideIcons({
      bootstrapShieldCheck,
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
