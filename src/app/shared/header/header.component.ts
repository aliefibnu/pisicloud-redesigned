import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [RouterLink, NgClass, NgIf, TranslateModule]
})
export class HeaderComponent implements OnInit {
  savedLang = localStorage.getItem('lang');
  currentSection = '';
  isMobile: boolean;
  disableList = true;

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.setLanguage();
    if (window.matchMedia('screen and (max-width: 768px)').matches) {
      this.isMobile = true;
    }
    else {
      this.isMobile = false;
    }
  }

  goToWA() {
    window.open('https://api.whatsapp.com/send?phone=628117774744&text=Hello%20Inforsys%2C%20saya%20tertarik%20dengan%20PISICloud%20%2C%20bisakah%20dijelaskan%20lebih%20lanjut%3F', '_blank')
  }

  private setLanguage() {
    this.translate.addLangs(['id', 'en', 'cn', 'jp', 'kr']);
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

  goToDemo() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSejx_hM929V94nPGzYBmWS8CU7X8thQ5lK4hvvzJ0a2ta2r1w/viewform', '_blank')
  }

  onChangeLang(lang: string) {
    this.savedLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
  }

}
