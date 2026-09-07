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

export interface NavbarFeatureItemConfig {
  readonly id: string;
  readonly titleKey: string;
  readonly descKey: string;
  readonly route: string;
  readonly domain: FeatureDomain;
  readonly icon: NavbarFeatureIconType;
}

export interface NavbarResourceItemConfig {
  readonly id: string;
  readonly titleKey: string;
  readonly descKey: string;
  readonly route: string;
  readonly fragment?: string;
  readonly iconType: NavbarResourceIconType;
}

export interface NavbarCategoryConfig {
  readonly id: FeatureDomain;
  readonly labelKey: string;
}
