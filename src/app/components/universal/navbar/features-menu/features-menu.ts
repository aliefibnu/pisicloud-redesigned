import { Component, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface FeatureMenuItem {
  readonly title: string;
  readonly description: string;
  readonly route: string;
  readonly badge?: string;
  readonly iconType: 'compute' | 'storage' | 'kubernetes' | 'security';
}

export const DEFAULT_FEATURES: readonly FeatureMenuItem[] = [
  {
    title: 'Cloud Compute',
    description: 'High-performance scalable virtual instances with instant boot times.',
    route: '/feature',
    iconType: 'compute',
  },
  {
    title: 'Object & Block Storage',
    description: 'S3-compatible, ultra-reliable distributed block and bucket storage.',
    route: '/feature',
    iconType: 'storage',
  },
  {
    title: 'Managed Kubernetes',
    description: 'Automated cluster provisioning, scaling, and container management.',
    route: '/feature',
    badge: 'Popular',
    iconType: 'kubernetes',
  },
  {
    title: 'Disaster Recovery',
    description: 'Continuous data replication, automated snapshots, and rapid failover.',
    route: '/feature',
    iconType: 'security',
  },
];

@Component({
  selector: 'navbar-features-menu',
  imports: [RouterLink],
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
  readonly features = DEFAULT_FEATURES;

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
