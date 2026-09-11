import { Component, computed, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapCheck2,
  bootstrapShieldCheck,
} from '@ng-icons/bootstrap-icons';
import { tablerArrowLeft, tablerArrowRight } from '@ng-icons/tabler-icons';

export interface DetailedStep {
  readonly id: string;
  readonly number: string;
  readonly translationKey: string;
  readonly image: string;
  readonly alt: string;
  readonly type: 'checklist' | 'narrative';
  readonly indices?: readonly number[];
}

export const DETAILED_STEPS: readonly DetailedStep[] = [
  {
    id: 'preparation',
    number: '01',
    translationKey: 'STRATEGY_IMPLEMENTATION.DETAILED_ROADMAP.STEPS.PREPARATION',
    image: '/images/landing/about-us-mockup.webp',
    alt: 'PISICloud ERP Project Preparation Kickoff and governance overview',
    type: 'checklist',
    indices: [0, 1, 2, 3, 4, 5, 6],
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
    indices: [0, 1, 2, 3, 4],
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
  selector:
    'strategy-detailed-roadmap, app-strategy-detailed-roadmap, app-detailed-roadmap',
  imports: [NgOptimizedImage, TranslatePipe, MatButtonModule, NgIcon],
  viewProviders: [
    provideIcons({
      bootstrapCheck2,
      bootstrapShieldCheck,
      tablerArrowLeft,
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
export class DetailedRoadmap {
  readonly steps = DETAILED_STEPS;
  readonly activeIndex = signal<number>(0);
  readonly currentStep = computed(() => this.steps[this.activeIndex()]);

  setActiveStep(index: number): void {
    if (index >= 0 && index < this.steps.length) {
      this.activeIndex.set(index);
    }
  }

  prevStep(): void {
    if (this.activeIndex() > 0) {
      this.activeIndex.update((i) => i - 1);
    }
  }

  nextStep(): void {
    if (this.activeIndex() < this.steps.length - 1) {
      this.activeIndex.update((i) => i + 1);
    }
  }

  onKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      const next = (index + 1) % this.steps.length;
      this.setActiveStep(next);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const prev = (index - 1 + this.steps.length) % this.steps.length;
      this.setActiveStep(prev);
    } else if (event.key === 'Home') {
      event.preventDefault();
      this.setActiveStep(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      this.setActiveStep(this.steps.length - 1);
    }
  }
}
