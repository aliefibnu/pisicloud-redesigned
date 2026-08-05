import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NgIf, NgClass } from '@angular/common';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: true,
    imports: [NgIf, NgClass, TranslateModule]
})
export class AboutComponent implements OnInit {
  currentSection = '';
  savedLang = localStorage.getItem('lang');
  isMobile: boolean;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.setLanguage();

    if (window.screen.width <= 768) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
  }

  private setLanguage() {
    this.translate.addLangs(['id', 'en']);
    this.translate.setDefaultLang(!this.savedLang ? 'id' : this.savedLang);
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
