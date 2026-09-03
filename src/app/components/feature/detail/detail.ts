import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  computed,
  inject,
  input,
  effect,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { FeatureDetailItemConfig } from '../../../data/features/features.model';

export type FeatureDetailItem = FeatureDetailItemConfig;

@Component({
  selector: 'feature-detail',
  imports: [TranslatePipe, NgOptimizedImage],
  templateUrl: './detail.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }

    .accordion-grid {
      display: grid;
      transition:
        grid-template-rows 350ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  `,
})
export class Detail implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);

  readonly items = input<readonly FeatureDetailItemConfig[]>([]);

  readonly duration = 6000;
  readonly tickInterval = 50;

  readonly activeIndex = signal<number>(0);
  readonly progress = signal<number>(0);
  readonly isPaused = signal<boolean>(false);

  private timerId: ReturnType<typeof setInterval> | null = null;

  readonly activeItem = computed(() => {
    const list = this.items();
    if (!list || list.length === 0) return null;
    return list[this.activeIndex()] ?? list[0];
  });

  constructor() {
    effect(() => {
      // Whenever items input changes, reset active selection & progress
      const list = this.items();
      if (list && list.length > 0) {
        this.activeIndex.set(0);
        this.progress.set(0);
      }
    });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startTimer();
    }
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.stopTimer();
    if (isPlatformBrowser(this.platformId)) {
      this.timerId = setInterval(() => {
        if (!this.isPaused()) {
          const step = (this.tickInterval / this.duration) * 100;
          this.progress.update((p) => {
            const next = p + step;
            if (next >= 100) {
              this.nextFeature();
              return 0;
            }
            return next;
          });
        }
      }, this.tickInterval);
    }
  }

  stopTimer() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  selectFeature(index: number) {
    this.activeIndex.set(index);
    this.progress.set(0);
  }

  nextFeature() {
    const total = this.items().length || 1;
    this.activeIndex.update((current) => (current + 1) % total);
    this.progress.set(0);
  }

  pauseAutoPlay() {
    this.isPaused.set(true);
  }

  resumeAutoPlay() {
    this.isPaused.set(false);
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectFeature(index);
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      const total = this.items().length || 1;
      this.selectFeature((index + 1) % total);
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const total = this.items().length || 1;
      this.selectFeature((index - 1 + total) % total);
    }
  }
}
