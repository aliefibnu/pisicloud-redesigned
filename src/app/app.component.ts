import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { routeAnimations } from './core/animations/route.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  isLoading: boolean;
  pageYoffset: number;

  constructor(private scroll: ViewportScroller) {

  }

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.pageYoffset = window.pageYOffset
    var mybutton = document.getElementById('myBtn')
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = 'block'
    } else {
      mybutton.style.display = 'none'
    }
  }


  ngOnInit() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 600);
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0])
  }

  goToWA() {
    window.open('https://api.whatsapp.com/send?phone=628117774744&text=Hello%20Inforsys%2C%20saya%20tertarik%20dengan%20produk%20Inforsys%20%2C%20bisakah%20dijelaskan%20lebih%20lanjut%3F', '_blank')
  }

}
