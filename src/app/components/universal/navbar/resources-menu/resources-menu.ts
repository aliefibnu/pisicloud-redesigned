import { Component, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ResourceMenuItem {
  readonly title: string;
  readonly description: string;
  readonly href?: string;
  readonly route?: string;
  readonly isExternal?: boolean;
  readonly iconType: 'docs' | 'guides' | 'cases' | 'support';
}

export const DEFAULT_RESOURCES: readonly ResourceMenuItem[] = [
  {
    title: 'Documentation',
    description: 'Technical specs, architectural references, and API integration guides.',
    href: '#resources',
    iconType: 'docs',
  },
  {
    title: 'Architecture & Guides',
    description: 'Best practices for scalable cloud deployment and disaster recovery.',
    href: '#resources',
    iconType: 'guides',
  },
  {
    title: 'Case Studies',
    description: 'Real-world customer architectures and enterprise benchmark results.',
    href: '#resources',
    iconType: 'cases',
  },
  {
    title: 'Community & Support',
    description: '24/7 dedicated engineering assistance, SLAs, and developer forums.',
    href: '#contact',
    iconType: 'support',
  },
];

@Component({
  selector: 'navbar-resources-menu',
  imports: [RouterLink],
  templateUrl: './resources-menu.html',
  styles: ``,
  host: {
    class: 'block',
  },
})
export class ResourcesMenu {
  readonly isOpen = input(false);
  readonly variant = input<'desktop' | 'mobile'>('desktop');

  readonly menuToggled = output<void>();
  readonly menuClosed = output<void>();
  readonly itemClick = output<void>();

  readonly isMobileExpanded = signal(false);
  readonly resources = DEFAULT_RESOURCES;

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
