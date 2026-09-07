import { Component, computed, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import {
  FeatureDomain,
  NavbarCategoryConfig,
  NavbarFeatureIconType,
  NavbarFeatureItemConfig,
  NAVBAR_CATEGORIES,
  NAVBAR_FEATURES,
} from '../../../../data/navbar';

export type { FeatureDomain };
export type FeatureIconType = NavbarFeatureIconType;
export type FeatureMenuItem = NavbarFeatureItemConfig;
export type FeatureCategory = NavbarCategoryConfig;

@Component({
  selector: 'navbar-features-menu',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './features-menu.html',
  styles: ``,
  host: {
    class: 'block',
  },
})
export class FeaturesMenu {
  readonly isOpen = input(false);
  readonly variant = input<'desktop' | 'mobile'>('desktop');

  readonly menuToggled = output<void>();
  readonly menuClosed = output<void>();
  readonly itemClick = output<void>();

  readonly isMobileExpanded = signal(false);
  readonly features = NAVBAR_FEATURES;
  readonly categories = NAVBAR_CATEGORIES;

  readonly hrFeatures = computed(() =>
    this.features.filter((f) => f.domain === 'hr')
  );
  readonly attendanceFeatures = computed(() =>
    this.features.filter((f) => f.domain === 'attendance')
  );
  readonly leaveOvertimeFeatures = computed(() =>
    this.features.filter((f) => f.domain === 'leave-overtime')
  );
  readonly payrollTaxFeatures = computed(() =>
    this.features.filter((f) => f.domain === 'payroll-tax')
  );

  toggleMenu(): void {
    this.menuToggled.emit();
  }

  toggleMobileAccordion(): void {
    this.isMobileExpanded.update((open) => !open);
  }

  onItemClick(): void {
    this.menuClosed.emit();
    this.itemClick.emit();
  }
}
