import { Component, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

export type ResourceIconType = 'about' | 'strategy' | 'customers';

export interface ResourceMenuItem {
  readonly title: string;
  readonly description?: string;
  readonly route?: string;
  readonly fragment?: string;
  readonly href?: string;
  readonly iconType: ResourceIconType;
}

export const DEFAULT_RESOURCES: readonly ResourceMenuItem[] = [
  {
    title: 'About PISICloud',
    description: 'Get to know PISICloud in depth.',
    route: '/',
    fragment: 'about-us',
    iconType: 'about',
  },
  {
    title: 'Implementation Strategy',
    description: 'Turning strategic plans into action.',
    route: '/',
    fragment: 'solution',
    iconType: 'strategy',
  },
  {
    title: 'Our Customers',
    description: 'PISICloud has been trusted by 100+ companies.',
    route: '/',
    fragment: 'why-choose-us',
    iconType: 'customers',
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
