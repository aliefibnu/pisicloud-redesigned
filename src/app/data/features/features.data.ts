import { FeatureConfig, FeatureSlug } from './features.model';

export const DEFAULT_FEATURE_SLUG: FeatureSlug = 'recruitment';

export const ALL_FEATURES: readonly FeatureConfig[] = [
  {
    id: 'recruitment',
    domain: 'hr',
    icon: 'recruitment',
    defaultImage: '/images/features/recruitment-preview.png',
    nameKey: 'FEATURE.RECRUITMENT.NAME',
    hero: {
      titleKey: 'FEATURE.RECRUITMENT.HERO.TITLE',
      descKey: 'FEATURE.RECRUITMENT.HERO.DESC',
    },
    items: [
      {
        id: 'application-submission',
        titleKey: 'FEATURE.RECRUITMENT.ITEMS.APPLICATION_SUBMISSION.TITLE',
        descKey: 'FEATURE.RECRUITMENT.ITEMS.APPLICATION_SUBMISSION.DESC',
        img: '/images/features/recruitment-preview.png',
      },
      {
        id: 'selection-process',
        titleKey: 'FEATURE.RECRUITMENT.ITEMS.SELECTION_PROCESS.TITLE',
        descKey: 'FEATURE.RECRUITMENT.ITEMS.SELECTION_PROCESS.DESC',
        img: '/images/features/recruitment-preview.png',
      },
      {
        id: 'selection-result',
        titleKey: 'FEATURE.RECRUITMENT.ITEMS.SELECTION_RESULT.TITLE',
        descKey: 'FEATURE.RECRUITMENT.ITEMS.SELECTION_RESULT.DESC',
        img: '/images/features/recruitment-preview.png',
      },
      {
        id: 'efficient-recruitment',
        titleKey: 'FEATURE.RECRUITMENT.ITEMS.EFFICIENT_RECRUITMENT.TITLE',
        descKey: 'FEATURE.RECRUITMENT.ITEMS.EFFICIENT_RECRUITMENT.DESC',
        img: '/images/features/recruitment-preview.png',
      },
      {
        id: 'simplified-process',
        titleKey: 'FEATURE.RECRUITMENT.ITEMS.SIMPLIFIED_PROCESS.TITLE',
        descKey: 'FEATURE.RECRUITMENT.ITEMS.SIMPLIFIED_PROCESS.DESC',
        img: '/images/features/recruitment-preview.png',
      },
    ],
  },
  {
    id: 'attendance',
    domain: 'attendance',
    icon: 'attendance',
    defaultImage: '/images/features/Vector-1.png',
    nameKey: 'FEATURE.ATTENDANCE.NAME',
    hero: {
      titleKey: 'FEATURE.ATTENDANCE.HERO.TITLE',
      descKey: 'FEATURE.ATTENDANCE.HERO.DESC',
    },
    items: [
      {
        id: 'shift-rotation',
        titleKey: 'FEATURE.ATTENDANCE.ITEMS.SHIFT_ROTATION.TITLE',
        descKey: 'FEATURE.ATTENDANCE.ITEMS.SHIFT_ROTATION.DESC',
        img: '/images/features/Vector-1.png',
      },
      {
        id: 'realtime-tracking',
        titleKey: 'FEATURE.ATTENDANCE.ITEMS.REALTIME_TRACKING.TITLE',
        descKey: 'FEATURE.ATTENDANCE.ITEMS.REALTIME_TRACKING.DESC',
        img: '/images/features/Vector-1.png',
      },
    ],
  },
  {
    id: 'payroll',
    domain: 'payroll-tax',
    icon: 'payroll',
    defaultImage: '/images/features/image 6.png',
    nameKey: 'FEATURE.PAYROLL.NAME',
    hero: {
      titleKey: 'FEATURE.PAYROLL.HERO.TITLE',
      descKey: 'FEATURE.PAYROLL.HERO.DESC',
    },
    items: [
      {
        id: 'custom-formula',
        titleKey: 'FEATURE.PAYROLL.ITEMS.CUSTOM_FORMULA.TITLE',
        descKey: 'FEATURE.PAYROLL.ITEMS.CUSTOM_FORMULA.DESC',
        img: '/images/features/image 6.png',
      },
      {
        id: 'auto-payslip',
        titleKey: 'FEATURE.PAYROLL.ITEMS.AUTO_PAYSLIP.TITLE',
        descKey: 'FEATURE.PAYROLL.ITEMS.AUTO_PAYSLIP.DESC',
        img: '/images/features/image 6.png',
      },
    ],
  },
  {
    id: 'database',
    domain: 'hr',
    icon: 'database',
    defaultImage: '/images/features/image 3-4.png',
    nameKey: 'FEATURE.DATABASE.NAME',
    hero: {
      titleKey: 'FEATURE.DATABASE.HERO.TITLE',
      descKey: 'FEATURE.DATABASE.HERO.DESC',
    },
    items: [
      {
        id: 'employee-records',
        titleKey: 'FEATURE.DATABASE.ITEMS.EMPLOYEE_RECORDS.TITLE',
        descKey: 'FEATURE.DATABASE.ITEMS.EMPLOYEE_RECORDS.DESC',
        img: '/images/features/image 3-4.png',
      },
      {
        id: 'document-vault',
        titleKey: 'FEATURE.DATABASE.ITEMS.DOCUMENT_VAULT.TITLE',
        descKey: 'FEATURE.DATABASE.ITEMS.DOCUMENT_VAULT.DESC',
        img: '/images/features/image 3-4.png',
      },
    ],
  },
  {
    id: 'personal-leave',
    domain: 'leave-overtime',
    icon: 'personal-leave',
    defaultImage: '/images/features/image 3.png',
    nameKey: 'FEATURE.PERSONAL_LEAVE.NAME',
    hero: {
      titleKey: 'FEATURE.PERSONAL_LEAVE.HERO.TITLE',
      descKey: 'FEATURE.PERSONAL_LEAVE.HERO.DESC',
    },
    items: [
      {
        id: 'leave-request',
        titleKey: 'FEATURE.PERSONAL_LEAVE.ITEMS.LEAVE_REQUEST.TITLE',
        descKey: 'FEATURE.PERSONAL_LEAVE.ITEMS.LEAVE_REQUEST.DESC',
        img: '/images/features/image 3.png',
      },
      {
        id: 'multi-level-approval',
        titleKey: 'FEATURE.PERSONAL_LEAVE.ITEMS.MULTI_LEVEL_APPROVAL.TITLE',
        descKey: 'FEATURE.PERSONAL_LEAVE.ITEMS.MULTI_LEVEL_APPROVAL.DESC',
        img: '/images/features/image 3.png',
      },
    ],
  },
  {
    id: 'personal-overtime',
    domain: 'leave-overtime',
    icon: 'personal-overtime',
    defaultImage: '/images/features/image 3-2.png',
    nameKey: 'FEATURE.PERSONAL_OVERTIME.NAME',
    hero: {
      titleKey: 'FEATURE.PERSONAL_OVERTIME.HERO.TITLE',
      descKey: 'FEATURE.PERSONAL_OVERTIME.HERO.DESC',
    },
    items: [
      {
        id: 'overtime-submission',
        titleKey: 'FEATURE.PERSONAL_OVERTIME.ITEMS.OVERTIME_SUBMISSION.TITLE',
        descKey: 'FEATURE.PERSONAL_OVERTIME.ITEMS.OVERTIME_SUBMISSION.DESC',
        img: '/images/features/image 3-2.png',
      },
      {
        id: 'auto-calculation',
        titleKey: 'FEATURE.PERSONAL_OVERTIME.ITEMS.AUTO_CALCULATION.TITLE',
        descKey: 'FEATURE.PERSONAL_OVERTIME.ITEMS.AUTO_CALCULATION.DESC',
        img: '/images/features/image 3-2.png',
      },
    ],
  },
  {
    id: 'employee-update',
    domain: 'hr',
    icon: 'employee-update',
    defaultImage: '/images/features/image 7.png',
    nameKey: 'FEATURE.EMPLOYEE_UPDATE.NAME',
    hero: {
      titleKey: 'FEATURE.EMPLOYEE_UPDATE.HERO.TITLE',
      descKey: 'FEATURE.EMPLOYEE_UPDATE.HERO.DESC',
    },
    items: [
      {
        id: 'profile-management',
        titleKey: 'FEATURE.EMPLOYEE_UPDATE.ITEMS.PROFILE_MANAGEMENT.TITLE',
        descKey: 'FEATURE.EMPLOYEE_UPDATE.ITEMS.PROFILE_MANAGEMENT.DESC',
        img: '/images/features/image 7.png',
      },
      {
        id: 'verification-workflow',
        titleKey: 'FEATURE.EMPLOYEE_UPDATE.ITEMS.VERIFICATION_WORKFLOW.TITLE',
        descKey: 'FEATURE.EMPLOYEE_UPDATE.ITEMS.VERIFICATION_WORKFLOW.DESC',
        img: '/images/features/image 7.png',
      },
    ],
  },
  {
    id: 'personal-attendance',
    domain: 'attendance',
    icon: 'personal-attendance',
    defaultImage: '/images/features/image 3-5.png',
    nameKey: 'FEATURE.PERSONAL_ATTENDANCE.NAME',
    hero: {
      titleKey: 'FEATURE.PERSONAL_ATTENDANCE.HERO.TITLE',
      descKey: 'FEATURE.PERSONAL_ATTENDANCE.HERO.DESC',
    },
    items: [
      {
        id: 'mobile-clock-in',
        titleKey: 'FEATURE.PERSONAL_ATTENDANCE.ITEMS.MOBILE_CLOCK_IN.TITLE',
        descKey: 'FEATURE.PERSONAL_ATTENDANCE.ITEMS.MOBILE_CLOCK_IN.DESC',
        img: '/images/features/image 3-5.png',
      },
      {
        id: 'attendance-history',
        titleKey: 'FEATURE.PERSONAL_ATTENDANCE.ITEMS.ATTENDANCE_HISTORY.TITLE',
        descKey: 'FEATURE.PERSONAL_ATTENDANCE.ITEMS.ATTENDANCE_HISTORY.DESC',
        img: '/images/features/image 3-5.png',
      },
    ],
  },
  {
    id: 'collective-leave',
    domain: 'leave-overtime',
    icon: 'collective-leave',
    defaultImage: '/images/features/image 3-1.png',
    nameKey: 'FEATURE.COLLECTIVE_LEAVE.NAME',
    hero: {
      titleKey: 'FEATURE.COLLECTIVE_LEAVE.HERO.TITLE',
      descKey: 'FEATURE.COLLECTIVE_LEAVE.HERO.DESC',
    },
    items: [
      {
        id: 'holiday-calendar',
        titleKey: 'FEATURE.COLLECTIVE_LEAVE.ITEMS.HOLIDAY_CALENDAR.TITLE',
        descKey: 'FEATURE.COLLECTIVE_LEAVE.ITEMS.HOLIDAY_CALENDAR.DESC',
        img: '/images/features/image 3-1.png',
      },
      {
        id: 'quota-deduction',
        titleKey: 'FEATURE.COLLECTIVE_LEAVE.ITEMS.QUOTA_DEDUCTION.TITLE',
        descKey: 'FEATURE.COLLECTIVE_LEAVE.ITEMS.QUOTA_DEDUCTION.DESC',
        img: '/images/features/image 3-1.png',
      },
    ],
  },
  {
    id: 'collective-overtime',
    domain: 'leave-overtime',
    icon: 'collective-overtime',
    defaultImage: '/images/features/image 5.png',
    nameKey: 'FEATURE.COLLECTIVE_OVERTIME.NAME',
    hero: {
      titleKey: 'FEATURE.COLLECTIVE_OVERTIME.HERO.TITLE',
      descKey: 'FEATURE.COLLECTIVE_OVERTIME.HERO.DESC',
    },
    items: [
      {
        id: 'group-spl',
        titleKey: 'FEATURE.COLLECTIVE_OVERTIME.ITEMS.GROUP_SPL.TITLE',
        descKey: 'FEATURE.COLLECTIVE_OVERTIME.ITEMS.GROUP_SPL.DESC',
        img: '/images/features/image 5.png',
      },
      {
        id: 'budget-tracking',
        titleKey: 'FEATURE.COLLECTIVE_OVERTIME.ITEMS.BUDGET_TRACKING.TITLE',
        descKey: 'FEATURE.COLLECTIVE_OVERTIME.ITEMS.BUDGET_TRACKING.DESC',
        img: '/images/features/image 5.png',
      },
    ],
  },
  {
    id: 'attendance-machine',
    domain: 'attendance',
    icon: 'attendance-machine',
    defaultImage: '/images/features/image 3-3.png',
    nameKey: 'FEATURE.ATTENDANCE_MACHINE.NAME',
    hero: {
      titleKey: 'FEATURE.ATTENDANCE_MACHINE.HERO.TITLE',
      descKey: 'FEATURE.ATTENDANCE_MACHINE.HERO.DESC',
    },
    items: [
      {
        id: 'hardware-sync',
        titleKey: 'FEATURE.ATTENDANCE_MACHINE.ITEMS.HARDWARE_SYNC.TITLE',
        descKey: 'FEATURE.ATTENDANCE_MACHINE.ITEMS.HARDWARE_SYNC.DESC',
        img: '/images/features/image 3-3.png',
      },
      {
        id: 'multi-device-support',
        titleKey: 'FEATURE.ATTENDANCE_MACHINE.ITEMS.MULTI_DEVICE_SUPPORT.TITLE',
        descKey: 'FEATURE.ATTENDANCE_MACHINE.ITEMS.MULTI_DEVICE_SUPPORT.DESC',
        img: '/images/features/image 3-3.png',
      },
    ],
  },
  {
    id: 'yearly-tax',
    domain: 'payroll-tax',
    icon: 'yearly-tax',
    defaultImage: '/images/features/image 3-6.png',
    nameKey: 'FEATURE.YEARLY_TAX.NAME',
    hero: {
      titleKey: 'FEATURE.YEARLY_TAX.HERO.TITLE',
      descKey: 'FEATURE.YEARLY_TAX.HERO.DESC',
    },
    items: [
      {
        id: 'ter-calculation',
        titleKey: 'FEATURE.YEARLY_TAX.ITEMS.TER_CALCULATION.TITLE',
        descKey: 'FEATURE.YEARLY_TAX.ITEMS.TER_CALCULATION.DESC',
        img: '/images/features/image 3-6.png',
      },
      {
        id: 'form-1721-a1',
        titleKey: 'FEATURE.YEARLY_TAX.ITEMS.FORM_1721_A1.TITLE',
        descKey: 'FEATURE.YEARLY_TAX.ITEMS.FORM_1721_A1.DESC',
        img: '/images/features/image 3-6.png',
      },
    ],
  },
];

export function getFeatureBySlug(slug: string | null | undefined): FeatureConfig | undefined {
  if (!slug) return undefined;
  const normalized = slug.trim().toLowerCase();
  return ALL_FEATURES.find(
    (f) => f.id === normalized ||
           (f.id === 'database' && normalized === 'database-management') ||
           (f.id === 'employee-update' && normalized === 'employee-data-update')
  );
}

export function getDefaultFeature(): FeatureConfig {
  return ALL_FEATURES.find((f) => f.id === DEFAULT_FEATURE_SLUG) ?? ALL_FEATURES[0];
}

export function getAllFeatureSlugs(): string[] {
  return ALL_FEATURES.map((f) => f.id);
}
