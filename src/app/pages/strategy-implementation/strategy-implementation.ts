import { Component } from '@angular/core';
import { Hero } from '../../components/strategy-implementation/hero/hero';
import { Offerings } from '../../components/strategy-implementation/offerings/offerings';
import { Benefits } from '../../components/strategy-implementation/benefits/benefits';
import { Faq } from '../../components/universal/faq/faq';
import { CompaniesMarquee } from '../../components/landing/companies-marquee/companies-marquee';

@Component({
  selector: 'app-strategy-implementation',
  imports: [Hero, Offerings, Benefits, Faq, CompaniesMarquee],
  templateUrl: './strategy-implementation.html',
  styles: ``,
})
export class StrategyImplementation {}
