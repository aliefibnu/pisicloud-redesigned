import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

export interface FaqItem {
  questionKey: string;
  answerKey: string;
}

@Component({
  selector: 'universal-faq, app-faq',
  imports: [TranslatePipe],
  templateUrl: './faq.html',
})
export class Faq {
  faqList: FaqItem[] = [
    {
      questionKey: 'UNIVERSAL.FAQ.ITEMS.Q1.QUESTION',
      answerKey: 'UNIVERSAL.FAQ.ITEMS.Q1.ANSWER',
    },
    {
      questionKey: 'UNIVERSAL.FAQ.ITEMS.Q2.QUESTION',
      answerKey: 'UNIVERSAL.FAQ.ITEMS.Q2.ANSWER',
    },
    {
      questionKey: 'UNIVERSAL.FAQ.ITEMS.Q3.QUESTION',
      answerKey: 'UNIVERSAL.FAQ.ITEMS.Q3.ANSWER',
    },
    {
      questionKey: 'UNIVERSAL.FAQ.ITEMS.Q4.QUESTION',
      answerKey: 'UNIVERSAL.FAQ.ITEMS.Q4.ANSWER',
    },
    {
      questionKey: 'UNIVERSAL.FAQ.ITEMS.Q5.QUESTION',
      answerKey: 'UNIVERSAL.FAQ.ITEMS.Q5.ANSWER',
    },
  ];

  // tracks the single currently-open item; null = all closed
  openIndex = signal<number | null>(null);

  toggleFaq(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}

export { Faq as FaqComponent };