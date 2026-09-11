import { Component, computed, input, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapShieldCheck,
  bootstrapCheckCircleFill,
  bootstrapTelephoneFill,
} from '@ng-icons/bootstrap-icons';
import { tablerArrowRight } from '@ng-icons/tabler-icons';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'strategy-hero, app-strategy-hero, app-hero',
  imports: [NgOptimizedImage, MatButtonModule, NgIcon, TranslatePipe],
  viewProviders: [
    provideIcons({
      bootstrapShieldCheck,
      bootstrapCheckCircleFill,
      bootstrapTelephoneFill,
      tablerArrowRight,
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
export class Hero {
  readonly image = input<string | undefined>(undefined);
  readonly hasImageError = signal<boolean>(false);

  readonly defaultImage = '/images/landing/hero-image.webp';
  readonly fallbackImage = '/images/solution/4_3.webp';

  readonly resolvedImage = computed<string>(() => {
    if (this.hasImageError()) {
      return this.fallbackImage;
    }
    return this.image() || this.defaultImage;
  });

  onImageError(): void {
    this.hasImageError.set(true);
  }
}
