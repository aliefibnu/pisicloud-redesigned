import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  tablerMessages,
  tablerPencilCheck,
  tablerCode,
  tablerRocket,
} from '@ng-icons/tabler-icons';
import { TranslatePipe } from '@ngx-translate/core';

interface ProcessStep {
  number: string;
  icon: string;
  titleKey: string;
  descKey: string;
}

@Component({
  selector: 'customize-module-process, app-customize-module-process',
  imports: [NgIcon, TranslatePipe],
  viewProviders: [
    provideIcons({
      tablerMessages,
      tablerPencilCheck,
      tablerCode,
      tablerRocket,
    }),
  ],
  templateUrl: './process.html',
})
export class Process {
  readonly steps: ProcessStep[] = [
    {
      number: '01',
      icon: 'tablerMessages',
      titleKey: 'CUSTOMIZE_MODULE.PROCESS.STEPS.STEP_1.TITLE',
      descKey: 'CUSTOMIZE_MODULE.PROCESS.STEPS.STEP_1.DESCRIPTION',
    },
    {
      number: '02',
      icon: 'tablerPencilCheck',
      titleKey: 'CUSTOMIZE_MODULE.PROCESS.STEPS.STEP_2.TITLE',
      descKey: 'CUSTOMIZE_MODULE.PROCESS.STEPS.STEP_2.DESCRIPTION',
    },
    {
      number: '03',
      icon: 'tablerCode',
      titleKey: 'CUSTOMIZE_MODULE.PROCESS.STEPS.STEP_3.TITLE',
      descKey: 'CUSTOMIZE_MODULE.PROCESS.STEPS.STEP_3.DESCRIPTION',
    },
    {
      number: '04',
      icon: 'tablerRocket',
      titleKey: 'CUSTOMIZE_MODULE.PROCESS.STEPS.STEP_4.TITLE',
      descKey: 'CUSTOMIZE_MODULE.PROCESS.STEPS.STEP_4.DESCRIPTION',
    },
  ];
}

export { Process as ProcessComponent };
