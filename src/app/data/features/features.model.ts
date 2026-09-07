export type FeatureSlug =
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

export type FeatureDomain = 'hr' | 'attendance' | 'leave-overtime' | 'payroll-tax';

export interface FeatureDetailItemConfig {
  readonly id: string;
  readonly titleKey: string;
  readonly descKey: string;
  readonly img: string;
}

export interface FeatureHeroConfig {
  readonly titleKey: string;
  readonly descKey: string;
}

export interface FeatureConfig {
  readonly id: FeatureSlug;
  readonly domain: FeatureDomain;
  readonly icon: string;
  readonly defaultImage: string;
  readonly nameKey: string;
  readonly hero: FeatureHeroConfig;
  readonly items: readonly FeatureDetailItemConfig[];
}
