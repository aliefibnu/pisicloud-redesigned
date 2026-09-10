import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  tablerReportAnalytics,
  tablerCpu,
  tablerBuildingSkyscraper,
  tablerHeartHandshake,
} from '@ng-icons/tabler-icons';
import { TranslatePipe } from '@ngx-translate/core';

interface BenefitItem {
  icon: string;
  titleKey: string;
  descKey: string;
}

@Component({
  selector: 'customize-module-benefits, app-customize-module-benefits',
  imports: [NgIcon, TranslatePipe],
  viewProviders: [
    provideIcons({
      tablerReportAnalytics,
      tablerCpu,
      tablerBuildingSkyscraper,
      tablerHeartHandshake,
    }),
  ],
  templateUrl: './benefits.html',
})
export class Benefits {
  readonly items: BenefitItem[] = [
    {
      icon: 'tablerReportAnalytics',
      titleKey: 'CUSTOMIZE_MODULE.BENEFITS.ITEMS.ANALYSIS.TITLE',
      descKey: 'CUSTOMIZE_MODULE.BENEFITS.ITEMS.ANALYSIS.DESCRIPTION',
    },
    {
      icon: 'tablerCpu',
      titleKey: 'CUSTOMIZE_MODULE.BENEFITS.ITEMS.SCALABLE.TITLE',
      descKey: 'CUSTOMIZE_MODULE.BENEFITS.ITEMS.SCALABLE.DESCRIPTION',
    },
    {
      icon: 'tablerBuildingSkyscraper',
      titleKey: 'CUSTOMIZE_MODULE.BENEFITS.ITEMS.EXPERIENCE.TITLE',
      descKey: 'CUSTOMIZE_MODULE.BENEFITS.ITEMS.EXPERIENCE.DESCRIPTION',
    },
    {
      icon: 'tablerHeartHandshake',
      titleKey: 'CUSTOMIZE_MODULE.BENEFITS.ITEMS.PARTNERSHIP.TITLE',
      descKey: 'CUSTOMIZE_MODULE.BENEFITS.ITEMS.PARTNERSHIP.DESCRIPTION',
    },
  ];
}

export { Benefits as BenefitsComponent };
