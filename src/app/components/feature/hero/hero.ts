import { Component, computed, effect, input, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { FeatureConfig, FeatureHeroConfig } from '../../../data/features/features.model';
import { getFeatureBySlug, getDefaultFeature } from '../../../data/features';

@Component({
  selector: 'feature-hero',
  imports: [NgOptimizedImage, TranslatePipe],
  templateUrl: './hero.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class Hero {
  readonly slug = input<string | undefined>(undefined);
  readonly feature = input<FeatureConfig | undefined>(undefined);
  readonly heroConfig = input<FeatureHeroConfig | undefined>(undefined);
  readonly titleKey = input<string | undefined>(undefined);
  readonly descKey = input<string | undefined>(undefined);
  readonly image = input<string | undefined>(undefined);

  readonly hasImageError = signal<boolean>(false);
  readonly placeholderImage = '/images/features/features-ui/recruitment-1.webp';
  readonly placeholderFallbackImage = '/images/features/features-ui/recruitment-1.jpeg';

  constructor() {
    effect(() => {
      // Reset error state when feature or image input changes
      this.effectiveFeature();
      this.image();
      this.hasImageError.set(false);
    });
  }

  readonly effectiveFeature = computed<FeatureConfig>(() => {
    const directFeature = this.feature();
    if (directFeature) return directFeature;

    const directSlug = this.slug();
    if (directSlug) {
      const found = getFeatureBySlug(directSlug);
      if (found) return found;
    }

    return getDefaultFeature();
  });

  readonly resolvedTitleKey = computed<string>(() => {
    return this.titleKey() || this.effectiveFeature().nameKey;
  });

  readonly resolvedHeroConfig = computed<FeatureHeroConfig>(() => {
    return this.heroConfig() || this.effectiveFeature().hero;
  });

  readonly resolvedDescKey = computed<string>(() => {
    return this.descKey() || this.resolvedHeroConfig().descKey;
  });

  readonly resolvedTaglineKey = computed<string>(() => {
    return this.resolvedHeroConfig().titleKey;
  });

  readonly resolvedImage = computed<string>(() => {
    if (this.hasImageError()) {
      return (
        this.effectiveFeature().fallbackImage ||
        this.placeholderFallbackImage
      );
    }
    return (
      this.image() ||
      this.effectiveFeature().defaultImage ||
      this.placeholderImage
    );
  });

  onImageError(): void {
    this.hasImageError.set(true);
  }

  readonly imageAlt = computed<string>(() => {
    return `${this.resolvedTitleKey()} preview`;
  });
}
