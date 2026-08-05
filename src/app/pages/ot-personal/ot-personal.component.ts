import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-ot-personal',
    templateUrl: './ot-personal.component.html',
    styleUrls: ['./ot-personal.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class OtPersonalComponent implements OnInit {
  savedLang = localStorage.getItem('lang');
  
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.addLangs(['id', 'en']);
    this.translate.setDefaultLang(!this.savedLang ? 'id' : this.savedLang);
  }

}
