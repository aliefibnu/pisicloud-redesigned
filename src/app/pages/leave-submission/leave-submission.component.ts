import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-leave-submission',
    templateUrl: './leave-submission.component.html',
    styleUrls: ['./leave-submission.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class LeaveSubmissionComponent implements OnInit {
  savedLang = localStorage.getItem('lang');
  
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.addLangs(['id', 'en']);
    this.translate.setDefaultLang(!this.savedLang ? 'id' : this.savedLang);
  }

}
