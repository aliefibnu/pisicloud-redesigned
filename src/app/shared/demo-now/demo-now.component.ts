import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FeatherModule } from 'angular-feather';

@Component({
    selector: 'app-demo-now',
    templateUrl: './demo-now.component.html',
    styleUrls: ['./demo-now.component.scss'],
    standalone: true,
    imports: [FeatherModule, TranslateModule]
})
export class DemoNowComponent implements OnInit {
  emailContact: string = 'hello@inforsys.co.id';
  
  constructor() { }

  ngOnInit() {
  }

  goToDemo() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSejx_hM929V94nPGzYBmWS8CU7X8thQ5lK4hvvzJ0a2ta2r1w/viewform', '_blank')
  }

}
