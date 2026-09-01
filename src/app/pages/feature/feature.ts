import { Component } from '@angular/core';
import { Hero } from '../../components/feature/hero/hero';
import { Detail } from '../../components/feature/detail/detail';
import { Faq } from '../../components/universal/faq/faq';
import { Interested } from '../../components/universal/interested/interested';
import { Footer } from '../../components/universal/footer/footer';

@Component({
  selector: 'app-feature',
  imports: [Hero, Detail, Faq, Interested, Footer],
  templateUrl: './feature.html',
  styles: ``,
})
export class Feature {}
