import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { COMPANY_LOGOS } from '../../../data/companies';

@Component({
  selector: 'landing-companies-marquee',
  imports: [NgOptimizedImage, TranslatePipe],
  templateUrl: './companies-marquee.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }

    @keyframes marquee-scroll {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(-100%, 0, 0);
      }
    }

    .animate-marquee {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      animation: marquee-scroll 70s linear infinite;
      will-change: transform;
      contain: layout paint;
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
