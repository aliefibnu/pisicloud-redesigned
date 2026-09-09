import { Component } from '@angular/core';
import { Hero } from '../../components/about-pisi/hero/hero';
import { AboutContent } from '../../components/about-pisi/about-content/about-content';
import { VisionMission } from '../../components/about-pisi/vision-mission/vision-mission';
import { Philosophy } from '../../components/about-pisi/philosophy/philosophy';
import { Faq } from '../../components/universal/faq/faq';
import { CompaniesMarquee } from '../../components/landing/companies-marquee/companies-marquee';

@Component({
  selector: 'app-about-pisi',
  imports: [
    Hero,
    AboutContent,
    VisionMission,
    Philosophy,
    Faq,
    CompaniesMarquee,
  ],
  templateUrl: './about-pisi.html',
  styles: ``,
})
export class AboutPisi {}

