import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}