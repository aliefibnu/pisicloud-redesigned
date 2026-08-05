import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-database-management',
    templateUrl: './database-management.component.html',
    styleUrls: ['./database-management.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class DatabaseManagementComponent implements OnInit {
  savedLang = localStorage.getItem('lang');
  
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.addLangs(['id', 'en']);
    this.translate.setDefaultLang(!this.savedLang ? 'id' : this.savedLang);
  }

}
