import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [NgClass, TranslateModule]
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();
  isMobile: boolean;
  emailContact: string = 'hello@inforsys.co.id';
  
  constructor() { }

  ngOnInit(): void {
    if (window.screen.width <= 585) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
  }
}
