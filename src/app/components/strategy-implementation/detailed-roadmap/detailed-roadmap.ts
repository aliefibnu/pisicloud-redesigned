import {
  Component,
  computed,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapCheckCircleFill,
  bootstrapBoxSeam,
  bootstrapShieldCheck,
  bootstrapFileEarmarkText,
  bootstrapArrowRight,
} from '@ng-icons/bootstrap-icons';
import { tablerArrowRight } from '@ng-icons/tabler-icons';

export interface DetailedStep {
  readonly id: string;
  readonly number: string;
  readonly translationKey: string;
  readonly image: string;
  readonly alt: string;
  readonly type: 'checklist' | 'narrative';
  readonly pointsCount?: number;
}

export const DETAILED_STEPS: readonly DetailedStep[] = [
  {
    id: 'preparation',
    number: '01',
    translationKey: 'STRATEGY_IMPLEMENTATION.DETAILED_ROADMAP.STEPS.PREPARATION',
    image: '/images/landing/about-us-mockup.webp',
    alt: 'PISICloud ERP Project Preparation Kickoff and governance overview',
    type: 'checklist',
    pointsCount: 7,
  },
  {
    id: 'blueprint',
    number: '02',
    translationKey: 'STRATEGY_IMPLEMENTATION.DETAILED_ROADMAP.STEPS.BLUEPRINT',
    image: '/images/solution/4_3-1.webp',
    alt: 'Business Blueprint focus group discussion and SOP matrix design',
    type: 'narrative',
  },
  {
    id: 'realization',
    number: '03',
    translationKey: 'STRATEGY_IMPLEMENTATION.DETAILED_ROADMAP.STEPS.REALIZATION',
    image: '/images/landing/hero-image.webp',
    alt: 'System configuration, custom agile modules and database validation',
    type: 'narrative',
  },
  {
    id: 'final-prep',
    number: '04',
    translationKey: 'STRATEGY_IMPLEMENTATION.DETAILED_ROADMAP.STEPS.FINAL_PREP',
    image: '/images/solution/4_3-2.webp',
    alt: 'Comprehensive user simulation, end-to-end testing and cutover readiness',
    type: 'checklist',
    pointsCount: 5,
  },
  {
    id: 'go-live',
    number: '05',
    translationKey: 'STRATEGY_IMPLEMENTATION.DETAILED_ROADMAP.STEPS.GO_LIVE',
    image: '/images/solution/4_3-3.webp',
    alt: 'Live production system launch, stabilization and continuous operational support',
    type: 'narrative',
  },
];

@Component({
  selector: 'strategy-detailed-roadmap, app-strategy-detailed-roadmap, app-detailed-roadmap',
  imports: [NgOptimizedImage, TranslatePipe, NgIcon],
  viewProviders: [
    provideIcons({
      bootstrapCheckCircleFill,
      bootstrapBoxSeam,
      bootstrapShieldCheck,
      bootstrapFileEarmarkText,
      bootstrapArrowRight,
      tablerArrowRight,
    }),
  ],
  templateUrl: './detailed-roadmap.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class DetailedRoadmap implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly steps = DETAILED_STEPS;
  readonly activeIndex = signal<number>(0);
  readonly currentStep = computed(() => this.steps[this.activeIndex()]);

  // Points array indices helper
  readonly preparationIndices = [0, 1, 2, 3, 4, 5, 6];
  readonly finalPrepIndices = [0, 1, 2, 3, 4];

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (
      isPlatformBrowser(this.platformId) &&
      typeof IntersectionObserver !== 'undefined'
    ) {
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  setActiveStep(index: number): void {
    this.activeIndex.set(index);
    if (isPlatformBrowser(this.platformId)) {
      const triggerEl = this.elementRef.nativeElement.querySelector(
        `#checkpoint-${this.steps[index].id}`,
      );
      if (triggerEl && typeof triggerEl.scrollIntoView === 'function') {
        triggerEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  private setupIntersectionObserver(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.2,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepId = entry.target.getAttribute('data-step-id');
          const foundIndex = this.steps.findIndex((s) => s.id === stepId);
          if (foundIndex !== -1) {
            this.activeIndex.set(foundIndex);
          }
        }
      });
    }, options);

    // Observe checkpoint elements after a brief tick
    setTimeout(() => {
      const triggers =
        this.elementRef.nativeElement.querySelectorAll('.checkpoint-trigger');
      Array.from(triggers).forEach((trigger) =>
        this.observer?.observe(trigger as HTMLElement),
      );
    }, 100);
  }
}
