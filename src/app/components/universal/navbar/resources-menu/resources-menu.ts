import { Component, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import {
  NavbarResourceIconType,
  NavbarResourceItemConfig,
  NAVBAR_RESOURCES,
} from '../../../../data/navbar';

export type ResourceIconType = NavbarResourceIconType;
export type ResourceMenuItem = NavbarResourceItemConfig;

@Component({
  selector: 'navbar-resources-menu',
  imports: [RouterLink, TranslatePipe],
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
  readonly resources = NAVBAR_RESOURCES;

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
