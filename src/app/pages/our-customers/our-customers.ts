import { Component } from '@angular/core';
import { CustomersHero } from '../../components/our-customers/hero/hero';
import { CustomersLogoGrid } from '../../components/our-customers/logo-grid/logo-grid';

@Component({
  selector: 'app-our-customers',
  imports: [CustomersHero, CustomersLogoGrid],
  templateUrl: './our-customers.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class OurCustomers {}
