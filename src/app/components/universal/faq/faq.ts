import { Component, signal } from '@angular/core';

export interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'universal-faq, app-faq',
  imports: [],
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
  openIndex = signal<number | null>(null);

  toggleFaq(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}

export { Faq as FaqComponent };