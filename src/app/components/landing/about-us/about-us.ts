import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-us',
  imports: [NgOptimizedImage],
  templateUrl: './about-us.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class AboutUsComponent {
  readonly titleFirstLine = 'A unified';
  readonly titleArchitecture = 'architecture';
  readonly titleThirdLine = 'for modern workforce';
  readonly titleManagement = 'management.';
  readonly description =
    'Break down silos with a seamlessly integrated suite designed to handle the complexity of global operations.';
}