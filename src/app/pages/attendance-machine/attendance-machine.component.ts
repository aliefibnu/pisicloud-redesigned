import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-attendance-machine',
    templateUrl: './attendance-machine.component.html',
    styleUrls: ['./attendance-machine.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class AttendanceMachineComponent implements OnInit {
  savedLang = localStorage.getItem('lang');
  
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.addLangs(['id', 'en']);
    this.translate.setDefaultLang(!this.savedLang ? 'id' : this.savedLang);
  }

}