import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { COMPANY_LOGOS } from '../../../data/companies';

@Component({
  selector: 'landing-companies-marquee',
  imports: [TranslatePipe],
  templateUrl: './companies-marquee.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }

    @keyframes marquee-scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    .animate-marquee {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      animation: marquee-scroll 70s linear infinite;
      will-change: transform;
    }

    .marquee-container:hover .animate-marquee,
    .marquee-container:focus-within .animate-marquee {
      animation-play-state: paused;
    }

    @media (prefers-reduced-motion: reduce) {
      .animate-marquee {
        animation: none;
      }
    }
  `,
})
export class CompaniesMarquee {
  readonly logos = COMPANY_LOGOS;
}
