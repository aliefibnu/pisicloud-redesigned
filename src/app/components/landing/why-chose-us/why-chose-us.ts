import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'landing-why-chose-us',
  imports: [NgOptimizedImage, TranslatePipe],
  templateUrl: './why-chose-us.html',
  styles: ``,
})
export class WhyChoseUs {
  // Komponen ini bertindak sebagai presenter statis untuk struktur Bento Grid
}

export { WhyChoseUs as WhyChooseUsComponent };