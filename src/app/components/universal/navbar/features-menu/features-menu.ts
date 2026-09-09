import { Component, computed, inject, input, output, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';
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
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './features-menu.html',
  styles: ``,
  host: {
    class: 'block',
  },
})
export class FeaturesMenu {
  private readonly router = inject(Router);

  readonly isOpen = input(false);
  readonly variant = input<'desktop' | 'mobile'>('desktop');

  readonly menuToggled = output<void>();
  readonly menuClosed = output<void>();
  readonly itemClick = output<void>();

  readonly isMobileExpanded = signal(false);
  readonly features = NAVBAR_FEATURES;
  readonly categories = NAVBAR_CATEGORIES;

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects)
    ),
    { initialValue: this.router.url }
  );

  readonly isActive = computed(() => {
    const cleanUrl = (this.currentUrl() ?? '').split('?')[0].split('#')[0];
    return cleanUrl === '/feature' || cleanUrl.startsWith('/feature/');
  });

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
