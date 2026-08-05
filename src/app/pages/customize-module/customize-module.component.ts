import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollspyDirective } from '../../shared/scrollspy.directive';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
    selector: 'app-customize-module',
    templateUrl: './customize-module.component.html',
    styleUrls: ['./customize-module.component.scss'],
    standalone: true,
    imports: [HeaderComponent, ScrollspyDirective, TranslateModule]
})
export class CustomizeModuleComponent implements OnInit {
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
