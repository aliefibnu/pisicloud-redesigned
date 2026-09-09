import {
  Component,
  DOCUMENT,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerChevronUp } from '@ng-icons/tabler-icons';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'scroll-to-top',
  imports: [MatButtonModule, NgIcon, TranslatePipe],
  viewProviders: [
    provideIcons({
      tablerChevronUp,
    }),
  ],
  templateUrl: './scroll-to-top.html',
  host: {
    class: 'fixed bottom-6 right-6 z-40 pointer-events-none',
    '(window:scroll)': 'onWindowScroll()',
  },
})
export class ScrollToTop {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  readonly isVisible = signal(false);

  onWindowScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const scrollY =
      window.scrollY || this.document.documentElement.scrollTop || 0;
    const shouldShow = scrollY > 300;
    if (this.isVisible() !== shouldShow) {
      this.isVisible.set(shouldShow);
    }
  }

  scrollToTop(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
