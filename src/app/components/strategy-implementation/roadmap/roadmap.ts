import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

export interface RoadmapStepItem {
  readonly id: string;
  readonly number: string;
  readonly translationKey: string;
  readonly theme: 'pine' | 'deep';
}

export const ROADMAP_STEPS: readonly RoadmapStepItem[] = [
  {
    id: 'preparation',
    number: '1',
    translationKey: 'STRATEGY_IMPLEMENTATION.ROADMAP.STEPS.PREPARATION',
    theme: 'pine',
  },
  {
    id: 'blueprint',
    number: '2',
    translationKey: 'STRATEGY_IMPLEMENTATION.ROADMAP.STEPS.BLUEPRINT',
    theme: 'deep',
  },
  {
    id: 'realization',
    number: '3',
    translationKey: 'STRATEGY_IMPLEMENTATION.ROADMAP.STEPS.REALIZATION',
    theme: 'pine',
  },
  {
    id: 'final-prep',
    number: '4',
    translationKey: 'STRATEGY_IMPLEMENTATION.ROADMAP.STEPS.FINAL_PREP',
    theme: 'deep',
  },
  {
    id: 'go-live',
    number: '5',
    translationKey: 'STRATEGY_IMPLEMENTATION.ROADMAP.STEPS.GO_LIVE',
    theme: 'pine',
  },
];

@Component({
  selector: 'strategy-roadmap, app-strategy-roadmap, app-roadmap',
  imports: [TranslatePipe],
  templateUrl: './roadmap.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class Roadmap {
  readonly steps = ROADMAP_STEPS;
}
