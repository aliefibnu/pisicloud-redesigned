import { Service, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Service()
export class DemoVideoModalService {
  private readonly platformId = inject(PLATFORM_ID);

  readonly isOpen = signal(false);
  readonly isVisible = signal(false);
  readonly display = signal<'hidden' | 'flex'>('hidden');

  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  showModal() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }

    this.isVisible.set(true);
    this.display.set('flex');

    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.isOpen.set(true);
        });
      });
    } else {
      this.isOpen.set(true);
    }
  }

  hideModal() {
    this.isOpen.set(false);

    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
      this.closeTimer = setTimeout(() => {
        this.isVisible.set(false);
        this.display.set('hidden');
        this.closeTimer = null;
      }, 300);
    } else {
      this.isVisible.set(false);
      this.display.set('hidden');
    }
  }
}

