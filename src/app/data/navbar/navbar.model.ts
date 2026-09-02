export type SupportedLanguageCode = 'en' | 'id' | 'zh' | 'ja' | 'ko';

export type FeatureDomain = 'hr' | 'attendance' | 'leave-overtime' | 'payroll-tax';

export type NavbarFeatureIconType =
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

export type NavbarResourceIconType = 'about' | 'strategy' | 'customers';

export interface NavbarFeatureItem {
  readonly title: string;
  readonly description: string;
  readonly route: string;
  readonly domain: FeatureDomain;
  readonly icon: NavbarFeatureIconType;
}

export interface NavbarResourceItem {
  readonly title: string;
  readonly description: string;
  readonly route: string;
  readonly fragment?: string;
  readonly iconType: NavbarResourceIconType;
}

export interface NavbarAriaLabels {
  readonly featuresMenu: string;
  readonly resourcesMenu: string;
}

export interface NavbarContent {
  readonly featuresLabel: string;
  readonly resourcesLabel: string;
  readonly contactUs: string;
  readonly aria: NavbarAriaLabels;
  readonly features: readonly NavbarFeatureItem[];
  readonly resources: readonly NavbarResourceItem[];
}
