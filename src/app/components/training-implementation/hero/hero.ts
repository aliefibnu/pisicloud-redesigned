import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  tablerCertificate,
  tablerArrowRight,
} from '@ng-icons/tabler-icons';

@Component({
  selector: 'training-hero',
  imports: [NgOptimizedImage, RouterLink, MatButtonModule, TranslatePipe, NgIcon],
  viewProviders: [
    provideIcons({
      tablerCertificate,
      tablerArrowRight,
    }),
  ],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {}
