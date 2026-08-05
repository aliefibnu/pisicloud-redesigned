import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-customer-slide',
    templateUrl: './customer-slide.component.html',
    styleUrls: ['./customer-slide.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class CustomerSlideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
