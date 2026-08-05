import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-block-quote4',
    templateUrl: './block-quote4.component.html',
    styleUrls: ['./block-quote4.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class BlockQuote4Component implements OnInit {
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
