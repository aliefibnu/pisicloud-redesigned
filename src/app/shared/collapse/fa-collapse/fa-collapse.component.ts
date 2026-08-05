import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-fa-collapse',
    templateUrl: './fa-collapse.component.html',
    styleUrls: ['./fa-collapse.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class FaCollapseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToWA() {
    window.open('https://api.whatsapp.com/send?phone=628117774744&text=Hello%20Inforsys%2C%20saya%20tertarik%20dengan%20produk%20Inforsys%20%2C%20bisakah%20dijelaskan%20lebih%20lanjut%3F', '_blank')
  }

}
