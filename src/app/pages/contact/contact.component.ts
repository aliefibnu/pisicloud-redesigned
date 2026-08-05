import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { FeatherModule } from 'angular-feather';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: true,
    imports: [FeatherModule, TranslateModule]
})
export class ContactComponent implements OnInit {
  savedLang = localStorage.getItem('lang');
  emailContact: string = 'hello@inforsys.co.id';
  
  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.setLanguage();
  }

  private setLanguage() {
    this.translate.addLangs(['id', 'en']);
    this.translate.setDefaultLang(!this.savedLang ? 'id' : this.savedLang);
  }

}
