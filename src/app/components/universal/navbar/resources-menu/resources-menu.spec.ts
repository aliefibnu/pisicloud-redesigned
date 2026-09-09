import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { ResourcesMenu } from './resources-menu';

@Component({
  template: '',
})
class DummyRouteComponent {}

describe('ResourcesMenu', () => {
  let component: ResourcesMenu;
  let fixture: ComponentFixture<ResourcesMenu>;
  let router: Router;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesMenu],
      providers: [
        provideRouter([
          { path: '', component: DummyRouteComponent },
          { path: 'contact-us', component: DummyRouteComponent },
          { path: 'about-pisi', component: DummyRouteComponent },
          { path: 'our-customers', component: DummyRouteComponent },
          { path: 'strategy-implementation', component: DummyRouteComponent },
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
          RESOURCES_LABEL: 'Resources',
          ARIA: {
            RESOURCES_MENU: 'Resources navigation menu',
          },
          RESOURCES_MENU: {
            TITLE: 'Resources',
            ITEMS: {
              ABOUT: {
                TITLE: 'About PISICloud',
                DESC: 'About description',
              },
            },
          },
        },
      },
    });
    translateService.use('en');

    fixture = TestBed.createComponent(ResourcesMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create resources menu component', () => {
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

  it('should be active on /about-pisi', async () => {
    await router.navigateByUrl('/about-pisi');
    fixture.detectChanges();
    expect(component.isActive()).toBe(true);

    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('bg-[#cde8e0]')).toBe(true);
    expect(button.classList.contains('text-[#00382f]')).toBe(true);
    expect(button.classList.contains('font-semibold')).toBe(true);
    expect(button.getAttribute('aria-current')).toBe('page');
  });

  it('should be active on /our-customers', async () => {
    await router.navigateByUrl('/our-customers');
    fixture.detectChanges();
    expect(component.isActive()).toBe(true);

    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('bg-[#cde8e0]')).toBe(true);
    expect(button.classList.contains('text-[#00382f]')).toBe(true);
  });

  it('should render active state on mobile variant', async () => {
    fixture.componentRef.setInput('variant', 'mobile');
    await router.navigateByUrl('/about-pisi');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('bg-[#cde8e0]')).toBe(true);
    expect(button.classList.contains('text-[#00382f]')).toBe(true);
    expect(button.classList.contains('font-semibold')).toBe(true);
    expect(button.getAttribute('aria-current')).toBe('page');
  });
});
