import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'universal-footer, app-footer',
  imports: [CommonModule, RouterLink, TranslatePipe, NgOptimizedImage],
  templateUrl: './footer.html',
})
export class Footer {
  currentYear: number = new Date().getFullYear();
}

export { Footer as FooterComponent };