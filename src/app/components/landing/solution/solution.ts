import {
  Component,
  computed,
  DestroyRef,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

export interface SolutionSlide {
  readonly id: number;
  readonly translationKey: string;
  readonly label: string;
  readonly supportingText: string;
  readonly image: string;
  readonly alt: string;
}

export interface VirtualSlideItem {
  readonly virtualIdx: number;
  readonly slideIndex: number;
  readonly slide: SolutionSlide;
}

export const BASE_SOLUTION_SLIDES: readonly SolutionSlide[] = [
  {
    id: 1,
    translationKey: 'LANDING.SOLUTION.SLIDES.LOGISTICS',
    label: 'Logistics & Transportation',
    supportingText:
      'Optimizing fleet management, driver route shift scheduling, and automated overtime formulas.',
    image: '/images/solution/4_3.png',
    alt: 'Commercial freight trucks logistics and distribution fleet',
  },
  {
    id: 2,
    translationKey: 'LANDING.SOLUTION.SLIDES.MANUFACTURING',
    label: 'Manufacturing & Industrial',
    supportingText:
      'Direct machine attendance connectivity, 24/7 complex shift rotations, and automated payroll formulas.',
    image: '/images/solution/4_3-1.png',
    alt: 'Smart factory manufacturing automation and robotics plant',
  },
  {
    id: 3,
    translationKey: 'LANDING.SOLUTION.SLIDES.CORPORATE',
    label: 'Corporate & Technology',
    supportingText:
      'Flexible working hours, app-based mobile attendance, and seamless multi-level leave approvals.',
    image: '/images/solution/4_3-2.png',
    alt: 'Corporate professional working on laptop with headset and coffee',
  },
  {
    id: 4,
    translationKey: 'LANDING.SOLUTION.SLIDES.CONSTRUCTION',
    label: 'Construction & Infrastructure',
    supportingText:
      'On-site daily attendance monitoring, project-based labor allocation, and compliant tax calculations.',
    image: '/images/solution/4_3-3.png',
    alt: 'City skyscraper construction crane illuminated at twilight',
  },
];

@Component({
  selector: 'landing-solution',
  imports: [NgOptimizedImage, TranslatePipe],
  templateUrl: './solution.html',
  styles: `
    :host {
      display: block;
      width: 100%;
      --sol-card-w: 80vw;
      --sol-card-gap: 8px;
    }

    @media (min-width: 640px) {
      :host {
        --sol-card-w: 500px;
        --sol-card-gap: 12px;
      }
    }

    @media (min-width: 1024px) {
      :host {
        --sol-card-w: 637px;
        --sol-card-gap: 12px;
      }
    }
  `,
  host: {
    class: 'block w-full overflow-hidden',
    '(keydown.arrowleft)': 'prev()',
    '(keydown.arrowright)': 'next()',
  },
})
export class Solution {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  readonly baseSlides = BASE_SOLUTION_SLIDES;

  // 15 sets of 4 slides = 60 virtual items for seamless continuous sliding
  readonly virtualSlides: readonly VirtualSlideItem[] = Array.from({ length: 60 }, (_, i) => {
    const slideIndex = i % BASE_SOLUTION_SLIDES.length;
    return {
      virtualIdx: i,
      slideIndex,
      slide: BASE_SOLUTION_SLIDES[slideIndex],
    };
  });

  // Start at index 26 (Set 6, Slide index 2: Corporate laptop card, 3rd dot active) matching screenshot
  readonly virtualIndex = signal(26);
  readonly disableTransition = signal(false);
  readonly isAutoScrolling = signal(true);

  readonly activeSlideIndex = computed(() => ((this.virtualIndex() % 4) + 4) % 4);

  readonly trackTransform = computed(() => {
    const idx = this.virtualIndex();
    return `translateX(calc(50% - (${idx} + 0.5) * (var(--sol-card-w) + var(--sol-card-gap) * 2)))`;
  });

  private autoScrollIntervalId: ReturnType<typeof setInterval> | null = null;
  private touchStartX = 0;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoScroll();
    }

    this.destroyRef.onDestroy(() => {
      this.stopAutoScroll();
    });
  }

  next(): void {
    this.virtualIndex.update((v) => v + 1);
  }

  prev(): void {
    this.virtualIndex.update((v) => v - 1);
  }

  goToVirtual(targetVirtualIdx: number): void {
    this.virtualIndex.set(targetVirtualIdx);
  }

  goToSlideIndex(targetIndex: number): void {
    const currentNorm = this.activeSlideIndex();
    let diff = targetIndex - currentNorm;
    if (diff > 2) diff -= 4;
    if (diff < -2) diff += 4;
    this.virtualIndex.update((v) => v + diff);
  }

  onTrackTransitionEnd(event: TransitionEvent): void {
    // Ignore events bubbling from child elements (e.g. scale, opacity)
    if (event.target !== event.currentTarget) {
      return;
    }

    const v = this.virtualIndex();
    // Only recenter when far from the center range [16..44]
    if (v <= 12 || v >= 48) {
      const normalized = ((v % 4) + 4) % 4;
      const recentered = 28 + normalized;
      if (recentered !== v && isPlatformBrowser(this.platformId)) {
        this.disableTransition.set(true);
        this.virtualIndex.set(recentered);
        requestAnimationFrame(() => {
          const el = event.target as HTMLElement;
          void el.offsetHeight; // force synchronous layout reflow
          requestAnimationFrame(() => {
            this.disableTransition.set(false);
          });
        });
      }
    }
  }

  startAutoScroll(): void {
    this.stopAutoScroll();
    if (isPlatformBrowser(this.platformId)) {
      this.autoScrollIntervalId = setInterval(() => {
        this.next();
      }, 4000);
      this.isAutoScrolling.set(true);
    }
  }

  stopAutoScroll(): void {
    if (this.autoScrollIntervalId !== null) {
      clearInterval(this.autoScrollIntervalId);
      this.autoScrollIntervalId = null;
      this.isAutoScrolling.set(false);
    }
  }

  pauseAutoScroll(): void {
    this.stopAutoScroll();
  }

  resumeAutoScroll(): void {
    this.startAutoScroll();
  }

  onTouchStart(event: TouchEvent): void {
    this.pauseAutoScroll();
    this.touchStartX = event.touches[0]?.clientX ?? 0;
  }

  onTouchEnd(event: TouchEvent): void {
    const endX = event.changedTouches[0]?.clientX ?? 0;
    const deltaX = endX - this.touchStartX;
    if (deltaX > 45) {
      this.prev();
    } else if (deltaX < -45) {
      this.next();
    }
    this.resumeAutoScroll();
  }
}
