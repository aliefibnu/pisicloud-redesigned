import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.html',
})
export class AboutUsComponent {
  // Data dinamis jika diperlukan di masa mendatang
  readonly titleFirstLine = 'A unified';
  readonly titleHighlighted = 'architecture';
  readonly titleLastLine = 'for modern workforce management.';
  readonly description = 'Break down silos with a seamlessly integrated suite designed to handle the complexity of global operations.';
}