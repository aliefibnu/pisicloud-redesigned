import { Component } from '@angular/core';
import { Hero } from '../../components/landing/hero/hero';
import { AboutUs } from '../../components/landing/about-us/about-us';
import { Features } from '../../components/landing/features/features';
import { Solution } from '../../components/landing/solution/solution';
import { WhyChoseUs } from '../../components/landing/why-chose-us/why-chose-us';
import { Faq } from '../../components/universal/faq/faq';
import { Interested } from '../../components/universal/interested/interested';
import { Footer } from '../../components/universal/footer/footer';

@Component({
  selector: 'app-landing',
  imports: [Hero, AboutUs, Features, Solution, WhyChoseUs, Faq, Interested, Footer],
  templateUrl: './landing.html',
  styles: ``,
})
export class Landing {}
