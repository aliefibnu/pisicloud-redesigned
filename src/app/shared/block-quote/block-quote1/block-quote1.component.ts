import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-block-quote1',
    templateUrl: './block-quote1.component.html',
    styleUrls: ['./block-quote1.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class BlockQuote1Component implements OnInit {
  savedLang = localStorage.getItem('lang');

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.setLanguage();
  }

  private setLanguage() {
    this.translate.addLangs(['id', 'en']);
    this.translate.setDefaultLang(!this.savedLang ? 'id' : this.savedLang);
  }

}
