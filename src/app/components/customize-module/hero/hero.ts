import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerArrowRight, tablerArrowUpRight } from '@ng-icons/tabler-icons';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'customize-module-hero, app-customize-module-hero',
  imports: [RouterLink, NgOptimizedImage, MatButtonModule, NgIcon, TranslatePipe],
  viewProviders: [
    provideIcons({
      tablerArrowRight,
      tablerArrowUpRight,
    }),
  ],
  templateUrl: './hero.html',
})
export class Hero {}

export { Hero as HeroComponent };
