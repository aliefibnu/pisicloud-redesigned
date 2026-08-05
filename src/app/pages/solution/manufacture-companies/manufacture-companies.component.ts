import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FeatherModule } from 'angular-feather';
import { BlockQuote2Component } from '../../../shared/block-quote/block-quote2/block-quote2.component';
import { BlockQuote1Component } from '../../../shared/block-quote/block-quote1/block-quote1.component';

@Component({
    selector: 'app-manufacture-companies',
    templateUrl: './manufacture-companies.component.html',
    styleUrls: ['./manufacture-companies.component.scss'],
    standalone: true,
    imports: [BlockQuote1Component, BlockQuote2Component, FeatherModule, TranslateModule]
})
export class ManufactureCompaniesComponent implements OnInit {
  currentSection = '';

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('nav-sticky');
    } else {
      navbar.classList.remove('nav-sticky');
    }
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }
}
