import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideImageKitLoader } from '@angular/common';
import { Interested } from './interested';

describe('Interested', () => {
  let component: Interested;
  let fixture: ComponentFixture<Interested>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interested],
    }).compileComponents();

    fixture = TestBed.createComponent(Interested);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the main headline', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const headline = compiled.querySelector('h2');
    expect(headline?.textContent).toContain('Interested in PISICloud?');
  });

  it('should render contact links for whatsapp, phone, and email', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('a');
    const hrefs = Array.from(links).map((l) => l.getAttribute('href'));

    expect(hrefs.some((href) => href?.includes('wa.me/627784160250'))).toBe(true);
    expect(hrefs.some((href) => href?.includes('tel:+628117774744'))).toBe(true);
    expect(hrefs.some((href) => href?.includes('mailto:hello@inforsys.co.id'))).toBe(true);
  });

  it('should render both Contact Us and View Demo Video CTA buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('a[mat-flat-button]');
    expect(buttons.length).toBe(2);

    const buttonTexts = Array.from(buttons).map((b) => b.textContent?.trim());
    expect(buttonTexts.some((t) => t?.includes('Contact Us'))).toBe(true);
    expect(buttonTexts.some((t) => t?.includes('View Demo Video'))).toBe(true);
  });
});
