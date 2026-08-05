import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { FeatherModule } from 'angular-feather';

@Component({
    selector: 'app-implementation-strategy',
    templateUrl: './implementation-strategy.component.html',
    styleUrls: ['./implementation-strategy.component.scss'],
    standalone: true,
    imports: [FeatherModule, TranslateModule]
})
export class ImplementationStrategyComponent implements OnInit {

  @ViewChild('carouselStart', { static: true }) carousel: NgbCarousel;
  indexCarousel = "ngb-slide-0";
  savedLang = localStorage.getItem('lang');

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.setLanguage();
  }

  private setLanguage() {
    this.translate.addLangs(['id', 'en']);
    this.translate.setDefaultLang(!this.savedLang ? 'id' : this.savedLang);
  }

  getIndexCarousel(slide) {
    this.indexCarousel = slide.current;
  }

  goToCarousel(index) {
    this.carousel.select(index);
  }
}
