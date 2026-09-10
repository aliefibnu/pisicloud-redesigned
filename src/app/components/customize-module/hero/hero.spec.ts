import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { provideRouter } from '@angular/router';
import { Hero } from './hero';

describe('CustomizeModule Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
      providers: [provideTranslateService(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the hero illustration with priority, non-draggable attribute, and 610x407 dimensions', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('ngsrc')).toBe('/images/customize-module/customize-hero.webp');
    expect(img?.getAttribute('width')).toBe('610');
    expect(img?.getAttribute('height')).toBe('407');
    expect(img?.hasAttribute('priority')).toBe(true);
    expect(img?.getAttribute('draggable')).toBe('false');
  });
});
