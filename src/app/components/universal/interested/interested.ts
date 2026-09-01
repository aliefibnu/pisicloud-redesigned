import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapWhatsapp,
  bootstrapTelephone,
  bootstrapTelephoneFill,
  bootstrapEnvelope,
  bootstrapPlayCircleFill,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'universal-interested',
  imports: [NgOptimizedImage, MatButtonModule, NgIcon],
  viewProviders: [
    provideIcons({
      bootstrapWhatsapp,
      bootstrapTelephone,
      bootstrapTelephoneFill,
      bootstrapEnvelope,
      bootstrapPlayCircleFill,
    }),
  ],
  templateUrl: './interested.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class Interested {}
