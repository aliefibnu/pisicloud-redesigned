import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import counterUp from 'counterup2';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-company-statistics',
    templateUrl: './company-statistics.component.html',
    styleUrls: ['./company-statistics.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class CompanyStatisticsComponent implements OnInit {
  @ViewChild('counter') counter: ElementRef;
  callback = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      let previousY = 0
      let previousRatio = 0
      if (entry.isIntersecting && !el.classList.contains('is-visible')) {
        counterUp(el, {
          duration: 1000,
          //  delay: 16,
        });
        // el.classList.remove( 'is-visible' )
      }
      const currentY = entry.boundingClientRect.y
      const currentRatio = entry.intersectionRatio
      const isIntersecting = entry.isIntersecting

      // Scrolling down/up
      if (currentY < previousY) {
        console.log("Scrolling down")
        el.classList.add('is-visible')
        // if (currentRatio > previousRatio && isIntersecting) {
        // //   // state.textContent ="Scrolling down enter"
        // //   console.log("Scrolling down enter")
        // el.classList.remove( 'is-visible' )
        // //   // el.classList.add( 'is-visible' )
        // } else {
        //   console.log("Scrolling down leave")
        //   el.classList.add( 'is-visible' )
        //   // el.classList.remove( 'is-visible' )
        //   // state.textContent ="Scrolling down leave"
        // }
      }
      else if (currentY > previousY && isIntersecting) {
        el.classList.remove('is-visible')

        // if (currentRatio < previousRatio) {
        //   // state.textContent ="Scrolling up leave"
        //   console.log("Scrolling up")
        // } else {
        //   console.log("Scrolling up")
        //   // state.textContent ="Scrolling up enter"
        // }
      }

      previousY = currentY
      previousRatio = currentRatio
    });
  };
  ngOnInit(): void {
    // const el = document.querySelector('.counter');
    // counterUp(el, {
    //     duration: 1000,
    //     delay: 16,
    // });

    const el1 = document.querySelector('.counter-1');
    const el2 = document.querySelector('.counter-2');
    const el3 = document.querySelector('.counter-3');
    const el4 = document.querySelector('.counter-4');
    const IO = new IntersectionObserver(this.callback, { threshold: 1 });
    IO.observe(el1);
    IO.observe(el2);
    IO.observe(el3);
    IO.observe(el4);
  }

}
