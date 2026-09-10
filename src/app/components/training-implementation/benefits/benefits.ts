import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  tablerArrowRight,
  tablerTrendingUp,
  tablerUsers,
  tablerShieldCheck,
  tablerChartBar,
  tablerGitFork,
} from '@ng-icons/tabler-icons';

interface BenefitItem {
  key: string;
  icon: string;
}

@Component({
  selector: 'training-benefits',
  imports: [RouterLink, MatButtonModule, TranslatePipe, NgIcon],
  viewProviders: [
    provideIcons({
      tablerArrowRight,
      tablerTrendingUp,
      tablerUsers,
      tablerShieldCheck,
      tablerChartBar,
      tablerGitFork,
    }),
  ],
  templateUrl: './benefits.html',
  styles: ``,
})
export class Benefits {
  readonly benefits: BenefitItem[] = [
    { key: 'B1', icon: 'tablerTrendingUp' },
    { key: 'B2', icon: 'tablerUsers' },
    { key: 'B3', icon: 'tablerShieldCheck' },
    { key: 'B4', icon: 'tablerChartBar' },
    { key: 'B5', icon: 'tablerGitFork' },
  ];
}
