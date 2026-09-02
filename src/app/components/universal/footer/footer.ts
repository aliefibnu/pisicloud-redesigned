import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'universal-footer, app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
})
export class Footer {
  currentYear: number = new Date().getFullYear();

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}

export { Footer as FooterComponent };