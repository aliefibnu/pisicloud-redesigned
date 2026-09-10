import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  tablerSchool,
  tablerAdjustmentsCog,
  tablerBook,
  tablerHeadset,
  tablerArrowUpRight,
} from '@ng-icons/tabler-icons';

interface OfferingPillar {
  key: string;
  icon: string;
}

@Component({
  selector: 'strategy-offerings',
  imports: [TranslatePipe, NgIcon],
  viewProviders: [
    provideIcons({
      tablerSchool,
      tablerAdjustmentsCog,
      tablerBook,
      tablerHeadset,
      tablerArrowUpRight,
    }),
  ],
  templateUrl: './offerings.html',
  styles: ``,
})
export class Offerings {
  readonly pillars: OfferingPillar[] = [
    { key: 'TRAINING', icon: 'tablerSchool' },
    { key: 'REIMPLEMENTATION', icon: 'tablerAdjustmentsCog' },
    { key: 'MATERIALS', icon: 'tablerBook' },
    { key: 'SUPPORT', icon: 'tablerHeadset' },
  ];
}
