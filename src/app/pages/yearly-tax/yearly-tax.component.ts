import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-yearly-tax',
    templateUrl: './yearly-tax.component.html',
    styleUrls: ['./yearly-tax.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class YearlyTaxComponent implements OnInit {
  savedLang = localStorage.getItem('lang');
  
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.addLangs(['id', 'en']);
    this.translate.setDefaultLang(!this.savedLang ? 'id' : this.savedLang);
  }

}