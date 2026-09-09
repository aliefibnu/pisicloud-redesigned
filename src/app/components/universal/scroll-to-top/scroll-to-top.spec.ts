import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { ScrollToTop } from './scroll-to-top';

describe('ScrollToTop', () => {
  let component: ScrollToTop;
  let fixture: ComponentFixture<ScrollToTop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollToTop],
      providers: [provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollToTop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the scroll-to-top component', () => {
    expect(component).toBeTruthy();
  });

  it('should render as a rounded square with chevron icon', () => {
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.classList.contains('rounded-xl!')).toBe(true);
    const icon = fixture.nativeElement.querySelector('ng-icon');
    expect(icon).toBeTruthy();
    expect(icon?.getAttribute('name')).toBe('tablerChevronUp');
  });

  it('should be hidden initially', () => {
    expect(component.isVisible()).toBe(false);
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.classList.contains('opacity-0')).toBe(true);
    expect(button.classList.contains('pointer-events-none')).toBe(true);
    expect(button.tabIndex).toBe(-1);
  });

  it('should become visible when scrolled past 300px', () => {
    // Mock scrollY
    Object.defineProperty(window, 'scrollY', { value: 350, writable: true });
    component.onWindowScroll();
    fixture.detectChanges();

    expect(component.isVisible()).toBe(true);
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.classList.contains('opacity-100')).toBe(true);
    expect(button.classList.contains('pointer-events-auto')).toBe(true);
    expect(button.tabIndex).toBe(0);
  });

  it('should hide when scrolled back to top', () => {
    Object.defineProperty(window, 'scrollY', { value: 350, writable: true });
    component.onWindowScroll();
    fixture.detectChanges();
    expect(component.isVisible()).toBe(true);

    Object.defineProperty(window, 'scrollY', { value: 50, writable: true });
    component.onWindowScroll();
    fixture.detectChanges();
    expect(component.isVisible()).toBe(false);
  });

  it('should call window.scrollTo when scrollToTop is invoked', () => {
    const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    component.scrollToTop();
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    scrollToSpy.mockRestore();
  });
});
