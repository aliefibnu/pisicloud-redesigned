import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import * as AOS from 'aos';
import { RouterLink } from '@angular/router';
import { FeatherModule } from 'angular-feather';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [FeatherModule, NgbCarouselModule, RouterLink, TranslateModule]
})
export class HomeComponent implements OnInit {
  @ViewChild('carouselStart', { static: true }) carousel: NgbCarousel;
  indexCarousel = "ngb-slide-0";
  savedLang = localStorage.getItem('lang');

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    AOS.init({
      offset: 200,
      duration: 550,
      easing: 'ease-in-sine',
      delay: 80,
    });
    this.setLanguage();
  }

  private setLanguage() {
    this.translate.addLangs(['id', 'en']);
    this.translate.setDefaultLang(!this.savedLang ? 'id' : this.savedLang);
  }

  goToWA() {
    window.open('https://api.whatsapp.com/send?phone=628117774744&text=Hello%20Inforsys%2C%20saya%20tertarik%20dengan%20produk%20Inforsys%20%2C%20bisakah%20dijelaskan%20lebih%20lanjut%3F', '_blank')
  }

  getIndexCarousel(slide) {
    this.indexCarousel = slide.current;
  }

  goToCarousel(index) {
    this.carousel.select(index);
  }

}
