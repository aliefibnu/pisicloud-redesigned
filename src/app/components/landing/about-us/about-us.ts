import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  imports: [NgOptimizedImage, TranslatePipe],
  templateUrl: './about-us.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class AboutUsComponent {}