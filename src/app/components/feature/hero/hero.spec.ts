import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { Hero } from './hero';
import { getFeatureBySlug } from '../../../data/features';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
      providers: [provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to recruitment feature and default image when no inputs are provided', () => {
    expect(component.effectiveFeature().id).toBe('recruitment');
    expect(component.resolvedTitleKey()).toBe('FEATURE.RECRUITMENT.NAME');
    expect(component.resolvedTaglineKey()).toBe('FEATURE.RECRUITMENT.HERO.TITLE');
    expect(component.resolvedDescKey()).toBe('FEATURE.RECRUITMENT.HERO.DESC');
    expect(component.resolvedImage()).toBe('/images/features/features-ui/recruitment-1.webp');
  });

  it('should dynamically resolve feature when slug input changes', () => {
    fixture.componentRef.setInput('slug', 'attendance');
    fixture.detectChanges();

    expect(component.effectiveFeature().id).toBe('attendance');
    expect(component.resolvedTitleKey()).toBe('FEATURE.ATTENDANCE.NAME');
    expect(component.resolvedTaglineKey()).toBe('FEATURE.ATTENDANCE.HERO.TITLE');
    expect(component.resolvedDescKey()).toBe('FEATURE.ATTENDANCE.HERO.DESC');
    expect(component.resolvedImage()).toBe('/images/features/features-ui/attendance-1.webp');
  });

  it('should prioritize direct feature input over slug', () => {
    const payrollFeature = getFeatureBySlug('payroll');
    fixture.componentRef.setInput('slug', 'attendance');
    fixture.componentRef.setInput('feature', payrollFeature);
    fixture.detectChanges();

    expect(component.effectiveFeature().id).toBe('payroll');
    expect(component.resolvedTitleKey()).toBe('FEATURE.PAYROLL.NAME');
    expect(component.resolvedImage()).toBe('/images/features/features-ui/payroll-1.webp');
  });

  it('should allow direct overrides for titleKey, descKey, and image', () => {
    fixture.componentRef.setInput('titleKey', 'CUSTOM.TITLE');
    fixture.componentRef.setInput('descKey', 'CUSTOM.DESC');
    fixture.componentRef.setInput('image', '/images/custom.png');
    fixture.detectChanges();

    expect(component.resolvedTitleKey()).toBe('CUSTOM.TITLE');
    expect(component.resolvedDescKey()).toBe('CUSTOM.DESC');
    expect(component.resolvedImage()).toBe('/images/custom.png');
  });

  it('should fallback to placeholder image when feature has no defaultImage', () => {
    const customFeature = {
      ...getFeatureBySlug('recruitment')!,
      defaultImage: '',
    };
    fixture.componentRef.setInput('feature', customFeature);
    fixture.detectChanges();

    expect(component.resolvedImage()).toBe('/images/features/features-ui/recruitment-1.webp');
  });

  it('should fallback to fallbackImage on image load error', () => {
    expect(component.resolvedImage()).toBe('/images/features/features-ui/recruitment-1.webp');

    component.onImageError();
    fixture.detectChanges();

    expect(component.resolvedImage()).toBe('/images/features/features-ui/recruitment-1.jpeg');
  });

  it('should render accessible section with heading and image preview', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const section = compiled.querySelector('section[aria-labelledby="feature-hero-heading"]');
    expect(section).toBeTruthy();

    const heading = compiled.querySelector('h1#feature-hero-heading');
    expect(heading).toBeTruthy();

    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('alt')).toBeTruthy();
  });
});
