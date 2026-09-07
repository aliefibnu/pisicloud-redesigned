import { Component, computed, input } from '@angular/core';
import { Hero } from '../../components/feature/hero/hero';
import { Detail } from '../../components/feature/detail/detail';
import { Faq } from '../../components/universal/faq/faq';
import { getFeatureBySlug, getDefaultFeature } from '../../data/features';

@Component({
  selector: 'app-feature',
  imports: [Hero, Detail, Faq],
  templateUrl: './feature.html',
  styles: ``,
})
export class Feature {
  readonly slug = input<string>('recruitment');

  readonly currentFeature = computed(() => {
    return getFeatureBySlug(this.slug()) ?? getDefaultFeature();
  });

  readonly heroConfig = computed(() => this.currentFeature().hero);
  readonly detailItems = computed(() => this.currentFeature().items);
}
