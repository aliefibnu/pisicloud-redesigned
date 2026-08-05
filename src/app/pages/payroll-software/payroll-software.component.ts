import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-payroll-software',
    templateUrl: './payroll-software.component.html',
    styleUrls: ['./payroll-software.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class PayrollSoftwareComponent implements OnInit {
  savedLang = localStorage.getItem('lang');
  
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.addLangs(['id', 'en']);
    this.translate.setDefaultLang(!this.savedLang ? 'id' : this.savedLang);
  }

}