import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-attendance-software',
    templateUrl: './attendance-software.component.html',
    styleUrls: ['./attendance-software.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class AttendanceSoftwareComponent implements OnInit {
  savedLang = localStorage.getItem('lang');
  
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.addLangs(['id', 'en']);
    this.translate.setDefaultLang(!this.savedLang ? 'id' : this.savedLang);
  }

}
