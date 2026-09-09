import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { FeaturesMenu } from './features-menu';

@Component({
  template: '',
})
class DummyRouteComponent {}

describe('FeaturesMenu', () => {
  let component: FeaturesMenu;
  let fixture: ComponentFixture<FeaturesMenu>;
  let router: Router;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesMenu],
      providers: [
        provideRouter([
          { path: '', component: DummyRouteComponent },
          { path: 'contact-us', component: DummyRouteComponent },
          { path: 'feature', component: DummyRouteComponent },
          { path: 'feature/:slug', component: DummyRouteComponent },
        ]),
        provideTranslateService({
          fallbackLang: 'en',
        }),
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    translateService = TestBed.inject(TranslateService);

    translateService.setTranslation('en', {
      UNIVERSAL: {
        NAVBAR: {
          FEATURES_LABEL: 'Features',
          ARIA: {
            FEATURES_MENU: 'Features navigation menu',
          },
          FEATURES_MENU: {
            TITLE: 'Features',
            ITEMS: {
              ATTENDANCE: {
                TITLE: 'Attendance',
                DESC: 'Attendance tracking',
              },
            },
          },
        },
      },
    });
    translateService.use('en');

    fixture = TestBed.createComponent(FeaturesMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create features menu component', () => {
    expect(component).toBeTruthy();
  });

  it('should not be active on root path /', () => {
    expect(component.isActive()).toBe(false);
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('bg-[#cde8e0]')).toBe(false);
  });

  it('should not be active on /contact-us', async () => {
    await router.navigateByUrl('/contact-us');
    fixture.detectChanges();
    expect(component.isActive()).toBe(false);
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('bg-[#cde8e0]')).toBe(false);
  });

  it('should be active on /feature', async () => {
    await router.navigateByUrl('/feature');
    fixture.detectChanges();
    expect(component.isActive()).toBe(true);

    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('bg-[#cde8e0]')).toBe(true);
    expect(button.classList.contains('text-[#00382f]')).toBe(true);
    expect(button.classList.contains('font-semibold')).toBe(true);
    expect(button.getAttribute('aria-current')).toBe('page');
  });

  it('should be active on /feature/attendance', async () => {
    await router.navigateByUrl('/feature/attendance');
    fixture.detectChanges();
    expect(component.isActive()).toBe(true);

    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('bg-[#cde8e0]')).toBe(true);
    expect(button.classList.contains('text-[#00382f]')).toBe(true);
    expect(button.classList.contains('font-semibold')).toBe(true);
  });

  it('should render active state on mobile variant', async () => {
    fixture.componentRef.setInput('variant', 'mobile');
    await router.navigateByUrl('/feature/attendance');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('bg-[#cde8e0]')).toBe(true);
    expect(button.classList.contains('text-[#00382f]')).toBe(true);
    expect(button.classList.contains('font-semibold')).toBe(true);
    expect(button.getAttribute('aria-current')).toBe('page');
  });
});
