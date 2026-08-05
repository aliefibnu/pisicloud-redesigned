import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-employee-update',
    templateUrl: './employee-update.component.html',
    styleUrls: ['./employee-update.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class EmployeeUpdateComponent implements OnInit {
  savedLang = localStorage.getItem('lang');
  
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.addLangs(['id', 'en']);
    this.translate.setDefaultLang(!this.savedLang ? 'id' : this.savedLang);
  }

}
