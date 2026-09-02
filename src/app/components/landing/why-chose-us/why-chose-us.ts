import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'landing-why-chose-us',
  imports: [NgOptimizedImage],
  templateUrl: './why-chose-us.html',
  styles: ``,
})
export class WhyChoseUs {
  // Komponen ini bertindak sebagai presenter statis untuk struktur Bento Grid
}

export { WhyChoseUs as WhyChooseUsComponent };