import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-attendance-personal',
    templateUrl: './attendance-personal.component.html',
    styleUrls: ['./attendance-personal.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class AttendancePersonalComponent implements OnInit {
  savedLang = localStorage.getItem('lang');
  
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.addLangs(['id', 'en']);
    this.translate.setDefaultLang(!this.savedLang ? 'id' : this.savedLang);
  }

}
