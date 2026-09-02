import { Component, computed, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

export type FeatureDomain = 'hr' | 'attendance' | 'leave-overtime' | 'payroll-tax';

export type FeatureIconType =
  | 'recruitment'
  | 'attendance'
  | 'payroll'
  | 'database'
  | 'personal-leave'
  | 'personal-overtime'
  | 'employee-update'
  | 'personal-attendance'
  | 'collective-leave'
  | 'collective-overtime'
  | 'attendance-machine'
  | 'yearly-tax';

export interface FeatureMenuItem {
  readonly title: string;
  readonly description?: string;
  readonly route: string;
  readonly domain: FeatureDomain;
  readonly icon: FeatureIconType;
}

export interface FeatureCategory {
  readonly id: FeatureDomain;
  readonly label: string;
}

export const FEATURE_CATEGORIES: readonly FeatureCategory[] = [
  { id: 'hr', label: 'HR & People' },
  { id: 'attendance', label: 'Attendance & Time' },
  { id: 'leave-overtime', label: 'Leave & Overtime' },
  { id: 'payroll-tax', label: 'Payroll & Tax' },
];

export const DEFAULT_FEATURES: readonly FeatureMenuItem[] = [
  {
    title: 'Recruitment',
    description: 'Menu description.',
    route: '/feature',
    domain: 'hr',
    icon: 'recruitment',
  },
  {
    title: 'Attendance',
    description: 'Daily check-in & time logs',
    route: '/feature',
    domain: 'attendance',
    icon: 'attendance',
  },
  {
    title: 'Payroll',
    description: 'Automated salary & payouts',
    route: '/feature',
    domain: 'payroll-tax',
    icon: 'payroll',
  },
  {
    title: 'Database Management',
    description: 'Central employee records',
    route: '/feature',
    domain: 'hr',
    icon: 'database',
  },
  {
    title: 'Personal Leave',
    description: 'Individual leave requests',
    route: '/feature',
    domain: 'leave-overtime',
    icon: 'personal-leave',
  },
  {
    title: 'Personal Overtime',
    description: 'Extra hours tracking & claims',
    route: '/feature',
    domain: 'leave-overtime',
    icon: 'personal-overtime',
  },
  {
    title: 'Employee Data Update',
    description: 'Self-service profile updates',
    route: '/feature',
    domain: 'hr',
    icon: 'employee-update',
  },
  {
    title: 'Personal Attendance',
    description: 'Personal history & stats',
    route: '/feature',
    domain: 'attendance',
    icon: 'personal-attendance',
  },
  {
    title: 'Collective Leave',
    description: 'Company-wide & public holidays',
    route: '/feature',
    domain: 'leave-overtime',
    icon: 'collective-leave',
  },
  {
    title: 'Collective Overtime',
    description: 'Departmental overtime plans',
    route: '/feature',
    domain: 'leave-overtime',
    icon: 'collective-overtime',
  },
  {
    title: 'Attendance Machine',
    description: 'Biometric hardware sync',
    route: '/feature',
    domain: 'attendance',
    icon: 'attendance-machine',
  },
  {
    title: 'Yearly Tax',
    description: 'Annual PPh & tax calculation',
    route: '/feature',
    domain: 'payroll-tax',
    icon: 'yearly-tax',
  },
];

@Component({
  selector: 'navbar-features-menu',
  imports: [RouterLink],
  templateUrl: './features-menu.html',
  styles: ``,
  host: {
    class: 'block',
  },
})
export class FeaturesMenu {
  readonly isOpen = input(false);
  readonly variant = input<'desktop' | 'mobile'>('desktop');

  readonly menuToggled = output<void>();
  readonly menuClosed = output<void>();
  readonly itemClick = output<void>();

  readonly isMobileExpanded = signal(false);
  readonly features = DEFAULT_FEATURES;
  readonly categories = FEATURE_CATEGORIES;

  readonly hrFeatures = computed(() =>
    this.features.filter((f) => f.domain === 'hr')
  );
  readonly attendanceFeatures = computed(() =>
    this.features.filter((f) => f.domain === 'attendance')
  );
  readonly leaveOvertimeFeatures = computed(() =>
    this.features.filter((f) => f.domain === 'leave-overtime')
  );
  readonly payrollTaxFeatures = computed(() =>
    this.features.filter((f) => f.domain === 'payroll-tax')
  );

  toggleMenu(): void {
    this.menuToggled.emit();
  }

  toggleMobileAccordion(): void {
    this.isMobileExpanded.update((open) => !open);
  }

  onItemClick(): void {
    this.menuClosed.emit();
    this.itemClick.emit();
  }
}
