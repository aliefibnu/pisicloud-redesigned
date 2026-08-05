import { Component, OnInit } from '@angular/core';
import { ScrollspyDirective } from '../../../shared/scrollspy.directive';

@Component({
    selector: 'app-service-companies',
    templateUrl: './service-companies.component.html',
    styleUrls: ['./service-companies.component.scss'],
    standalone: true,
    imports: [ScrollspyDirective]
})
export class ServiceCompaniesComponent implements OnInit {
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
