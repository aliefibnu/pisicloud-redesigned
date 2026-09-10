import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerArrowRight } from '@ng-icons/tabler-icons';

@Component({
  selector: 'training-hero',
  imports: [NgOptimizedImage, RouterLink, MatButtonModule, TranslatePipe, NgIcon],
  viewProviders: [
    provideIcons({
      tablerArrowRight,
    }),
  ],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {}
