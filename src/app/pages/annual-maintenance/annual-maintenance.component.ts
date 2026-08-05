import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FeatherModule } from 'angular-feather';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
    selector: 'app-annual-maintenance',
    templateUrl: './annual-maintenance.component.html',
    styleUrls: ['./annual-maintenance.component.scss'],
    standalone: true,
    imports: [HeaderComponent, FeatherModule, TranslateModule]
})
export class AnnualMaintenanceComponent implements OnInit {
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
