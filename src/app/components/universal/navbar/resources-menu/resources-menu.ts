import { Component, computed, inject, input, output, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';
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
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './resources-menu.html',
  styles: ``,
  host: {
    class: 'block',
  },
})
export class ResourcesMenu {
  private readonly router = inject(Router);

  readonly isOpen = input(false);
  readonly variant = input<'desktop' | 'mobile'>('desktop');

  readonly menuToggled = output<void>();
  readonly menuClosed = output<void>();
  readonly itemClick = output<void>();

  readonly isMobileExpanded = signal(false);
  readonly resources = NAVBAR_RESOURCES;

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects)
    ),
    { initialValue: this.router.url }
  );

  readonly isActive = computed(() => {
    const cleanUrl = (this.currentUrl() ?? '').split('?')[0].split('#')[0];
    if (!cleanUrl || cleanUrl === '/') return false;
    return this.resources.some(
      (r) => r.route !== '/' && (cleanUrl === r.route || cleanUrl.startsWith(r.route + '/'))
    );
  });

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
