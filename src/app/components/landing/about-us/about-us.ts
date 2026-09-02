import { Component } from '@angular/core';

interface ClientLogo {
  name: string;
  src: string;
  alt: string;
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.html',
})
export class AboutUsComponent {
  clientLogos: ClientLogo[] = [
    { name: 'YEB', src: 'assets/images/logos/yeb.png', alt: 'YEB Logo' },
    { name: 'Austin', src: 'assets/images/logos/austin.png', alt: 'Austin Logo' },
    { name: 'BLZ', src: 'assets/images/logos/blz.png', alt: 'Bintan Lagoon Logo' },
    { name: 'Ennovi', src: 'assets/images/logos/ennovi.png', alt: 'Ennovi Logo' },
    { name: 'Galang Jaya', src: 'assets/images/logos/galang-jaya.png', alt: 'PT Sahana Galang Jaya' },
    { name: 'BIG', src: 'assets/images/logos/big.png', alt: 'BIG Logo' },
    { name: 'VMC', src: 'assets/images/logos/vmc.png', alt: 'VMC Logo' },
    { name: 'Yageo Kemet', src: 'assets/images/logos/yageo.png', alt: 'Yageo Kemet Logo' }
  ];
}