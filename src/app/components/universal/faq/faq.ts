import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'universal-faq, app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
})
export class Faq {
  faqList: FaqItem[] = [
    {
      question: 'Lorem ipsum dolor sit amet, duis voluptate .',
      answer:
        'Cupidatat dolore magna id exercitation dolor anim cillum. Nisi proident tempor magna pariatur magna esse esse commodo. Aute irure in nostrud in ut aliquip pariatur adipiscing ea in eu.',
    },
    {
      question: 'Lorem ipsum dolor sit amet, duis voluptate .',
      answer:
        'Cupidatat dolore magna id exercitation dolor anim cillum. Nisi proident tempor magna pariatur magna esse esse commodo. Aute irure in nostrud in ut aliquip pariatur adipiscing ea in eu.',
    },
    {
      question: 'Lorem ipsum dolor sit amet, duis voluptate .',
      answer:
        'Cupidatat dolore magna id exercitation dolor anim cillum. Nisi proident tempor magna pariatur magna esse esse commodo. Aute irure in nostrud in ut aliquip pariatur adipiscing ea in eu.',
    },
    {
      question: 'Lorem ipsum dolor sit amet, duis voluptate .',
      answer:
        'Cupidatat dolore magna id exercitation dolor anim cillum. Nisi proident tempor magna pariatur magna esse esse commodo. Aute irure in nostrud in ut aliquip pariatur adipiscing ea in eu.',
    },
    {
      question: 'Lorem ipsum dolor sit amet, duis voluptate .',
      answer:
        'Cupidatat dolore magna id exercitation dolor anim cillum. Nisi proident tempor magna pariatur magna esse esse commodo. Aute irure in nostrud in ut aliquip pariatur adipiscing ea in eu.',
    },
  ];

  // tracks the single currently-open item; null = all closed
  openIndex: number | null = null;

  toggleFaq(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}

export { Faq as FaqComponent };