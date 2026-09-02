import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FaqItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html'
})
export class FaqComponent {
  faqList: FaqItem[] = [
    { question: 'Lorem ipsum dolor sit amet, duis voluptate .', answer: 'Cupidatat dolore magna id exercitation dolor anim cillum. Nisi proident tempor magna pariatur magna esse esse commodo. Aute irure in nostrud in ut aliquip pariatur adipiscing ea in eu.', isOpen: false },
    { question: 'Lorem ipsum dolor sit amet, duis voluptate .', answer: 'Cupidatat dolore magna id exercitation dolor anim cillum. Nisi proident tempor magna pariatur magna esse esse commodo. Aute irure in nostrud in ut aliquip pariatur adipiscing ea in eu.', isOpen: false },
    { question: 'Lorem ipsum dolor sit amet, duis voluptate .', answer: 'Cupidatat dolore magna id exercitation dolor anim cillum. Nisi proident tempor magna pariatur magna esse esse commodo. Aute irure in nostrud in ut aliquip pariatur adipiscing ea in eu.', isOpen: false },
    { question: 'Lorem ipsum dolor sit amet, duis voluptate .', answer: 'Cupidatat dolore magna id exercitation dolor anim cillum. Nisi proident tempor magna pariatur magna esse esse commodo. Aute irure in nostrud in ut aliquip pariatur adipiscing ea in eu.', isOpen: false },
    { question: 'Lorem ipsum dolor sit amet, duis voluptate .', answer: 'Cupidatat dolore magna id exercitation dolor anim cillum. Nisi proident tempor magna pariatur magna esse esse commodo. Aute irure in nostrud in ut aliquip pariatur adipiscing ea in eu.', isOpen: false }
  ];

  toggleFaq(index: number): void {
    this.faqList[index].isOpen = !this.faqList[index].isOpen;
  }
}