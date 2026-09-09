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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render both mobile focused mockup and desktop banner', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const images = compiled.querySelectorAll('img');
    expect(images.length).toBeGreaterThanOrEqual(2);

    const mobileImg = Array.from(images).find((img) =>
      img.getAttribute('ngsrc')?.includes('hero-banner-mobile.webp')
    );
    const desktopImg = Array.from(images).find((img) =>
      img.getAttribute('ngsrc')?.includes('hero-banner.webp')
    );

    expect(mobileImg).toBeTruthy();
    expect(desktopImg).toBeTruthy();
  });
});
