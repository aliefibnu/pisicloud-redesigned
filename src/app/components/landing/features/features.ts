import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

export interface FeatureItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly alt: string;
}

export const FEATURES_DATA: readonly FeatureItem[] = [
  {
    id: 'recruitment',
    title: 'Recruitment',
    description:
      'Experience the future of recruitment - efficient, convenient, and accessible at your fingertips.',
    image: '/images/features/Vector.png',
    alt: 'Recruitment process showing business partners shaking hands',
  },
  {
    id: 'personal-leave',
    title: 'Personal Leave',
    description:
      'Take a break and come back stronger - our personal leave feature helps you recharge and achieve your best.',
    image: '/images/features/image 3.png',
    alt: 'Professional smiling outside office during personal leave',
  },
  {
    id: 'collective-leave',
    title: 'Collective Leave',
    description:
      'Seamless collective leave management - our collective leave request feature with approval simplifies team coordination!',
    image: '/images/features/image 3-1.png',
    alt: 'Woman holding alarm clock in front of laptop managing collective leave',
  },
  {
    id: 'attendance',
    title: 'Attendance',
    description:
      'Track employee attendance with ease and accuracy using our software with machine or apps integration',
    image: '/images/features/Vector-1.png',
    alt: 'Employee tracking attendance punctuality with clock and laptop',
  },
  {
    id: 'personal-overtime',
    title: 'Personal Overtime',
    description:
      'Easily and efficiently request personal overtime anytime, anywhere - our online personal overtime request feature is ready to assist you!',
    image: '/images/features/image 3-2.png',
    alt: 'Employee checking time and filing personal overtime request on laptop',
  },
  {
    id: 'collective-overtime',
    title: 'Collective Overtime',
    description:
      'Efficient collective overtime management - our collective overtime request feature with approval speeds up your team\'s workflow!',
    image: '/images/features/image 5.png',
    alt: 'Team coordinating together on collective overtime management screen',
  },
  {
    id: 'payroll',
    title: 'Payroll',
    description:
      'Your Payroll, Your Rules - Get Ease of Payroll Processing with the Best Payroll Software with Customizable Deduction and Allowance Formulas!',
    image: '/images/features/image 6.png',
    alt: 'Payroll calculator with banknotes and salary spreadsheets',
  },
  {
    id: 'employee-data-update',
    title: 'Employee Data Update',
    description:
      'Keep your HR data up-to-date effortlessly - our online employee data update feature simplifies the process for you!',
    image: '/images/features/image 7.png',
    alt: 'HRMS employee directory update dashboard interface',
  },
  {
    id: 'attendance-machine',
    title: 'Attendance Machine',
    description:
      'Direct connectivity to attendance machines - our connectivity feature to attendance machines simplifies employee attendance management for you!',
    image: '/images/features/image 3-3.png',
    alt: 'Attendance machine analytics dashboard with real-time check-in stats',
  },
  {
    id: 'database-management',
    title: 'Database Management',
    description:
      'Streamline your HR processes and unlock your team\'s potential - our online database management feature has got you covered!',
    image: '/images/features/image 3-4.png',
    alt: 'Connected secure database cluster architecture',
  },
  {
    id: 'personal-attendance',
    title: 'Personal Attendance',
    description:
      'Track your attendance on the go - our online attendance feature via app makes it easy and convenient for you!',
    image: '/images/features/image 3-5.png',
    alt: 'Employee tapping personal attendance check-in on mobile phone',
  },
  {
    id: 'yearly-tax',
    title: 'Yearly Tax',
    description:
      'Effortlessly manage annual taxes - our annual tax management feature is here to assist you!',
    image: '/images/features/image 3-6.png',
    alt: 'Yearly tax calculation report dashboard on laptop',
  },
];

@Component({
  selector: 'landing-features',
  imports: [NgOptimizedImage],
  templateUrl: './features.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class Features {
  readonly features = FEATURES_DATA;
}
