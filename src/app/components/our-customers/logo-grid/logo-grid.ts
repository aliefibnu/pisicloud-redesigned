import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { COMPANY_LOGOS, type CompanyLogo } from '../../../data/companies';

@Component({
  selector: 'customers-logo-grid',
  imports: [NgOptimizedImage, TranslatePipe],
  templateUrl: './logo-grid.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class CustomersLogoGrid {
  readonly allLogos: readonly CompanyLogo[] = COMPANY_LOGOS;
}
