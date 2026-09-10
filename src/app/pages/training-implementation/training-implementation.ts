import { Component } from '@angular/core';
import { Hero } from '../../components/training-implementation/hero/hero';
import { Offerings } from '../../components/training-implementation/offerings/offerings';
import { Benefits } from '../../components/training-implementation/benefits/benefits';
import { Faq } from '../../components/universal/faq/faq';
import { CompaniesMarquee } from '../../components/landing/companies-marquee/companies-marquee';

@Component({
  selector: 'app-training-implementation',
  imports: [Hero, Offerings, Benefits, Faq, CompaniesMarquee],
  templateUrl: './training-implementation.html',
  styles: ``,
})
export class TrainingImplementation {}
