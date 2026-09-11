import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { Hero } from './hero';

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

  it('should create the strategy hero component', () => {
    expect(component).toBeTruthy();
  });

  it('should default to defaultImage when no image input is provided', () => {
    expect(component.resolvedImage()).toBe('/images/landing/hero-image.webp');
  });

  it('should use custom image input when provided', () => {
    fixture.componentRef.setInput('image', '/images/custom-strategy.webp');
    fixture.detectChanges();

    expect(component.resolvedImage()).toBe('/images/custom-strategy.webp');
  });

  it('should fallback to fallbackImage when onImageError is triggered', () => {
    component.onImageError();
    fixture.detectChanges();

    expect(component.resolvedImage()).toBe('/images/solution/4_3.webp');
  });

  it('should render accessible section with heading and image preview', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const section = compiled.querySelector('section[aria-labelledby="strategy-hero-heading"]');
    expect(section).toBeTruthy();

    const heading = compiled.querySelector('h1#strategy-hero-heading');
    expect(heading).toBeTruthy();

    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('alt')).toBeTruthy();
  });
});
