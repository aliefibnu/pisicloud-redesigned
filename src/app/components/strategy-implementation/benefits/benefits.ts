import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerCircleCheck, tablerArrowRight } from '@ng-icons/tabler-icons';

interface BenefitItem {
  key: string;
}

@Component({
  selector: 'strategy-benefits',
  imports: [RouterLink, MatButtonModule, TranslatePipe, NgIcon],
  viewProviders: [
    provideIcons({
      tablerCircleCheck,
      tablerArrowRight,
    }),
  ],
  templateUrl: './benefits.html',
  styles: ``,
})
export class Benefits {
  readonly benefits: BenefitItem[] = [
    { key: 'B1' },
    { key: 'B2' },
    { key: 'B3' },
    { key: 'B4' },
    { key: 'B5' },
  ];
}
