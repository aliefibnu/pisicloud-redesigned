import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-block-quote6',
    templateUrl: './block-quote6.component.html',
    styleUrls: ['./block-quote6.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class BlockQuote6Component implements OnInit {
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
