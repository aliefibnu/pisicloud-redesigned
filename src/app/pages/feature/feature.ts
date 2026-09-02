import { Component } from '@angular/core';
import { Hero } from '../../components/feature/hero/hero';
import { Detail } from '../../components/feature/detail/detail';
import { Faq } from '../../components/universal/faq/faq';

@Component({
  selector: 'app-feature',
  imports: [Hero, Detail, Faq],
  templateUrl: './feature.html',
  styles: ``,
})
export class Feature {}
