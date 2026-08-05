import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-ot-submission',
    templateUrl: './ot-submission.component.html',
    styleUrls: ['./ot-submission.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class OtSubmissionComponent implements OnInit {
  savedLang = localStorage.getItem('lang');
  
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.addLangs(['id', 'en']);
    this.translate.setDefaultLang(!this.savedLang ? 'id' : this.savedLang);
  }

}
