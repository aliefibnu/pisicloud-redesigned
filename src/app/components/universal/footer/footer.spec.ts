import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { provideRouter } from '@angular/router';
import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideTranslateService(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render back to top arrow button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const arrowButton = compiled.querySelector('button');
    expect(arrowButton).toBeNull();
  });

  it('should render Inforsys logo with NgOptimizedImage and 179x40 dimensions', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logo = compiled.querySelector('img[alt="Inforsys"]');
    expect(logo).toBeTruthy();
    expect(logo?.getAttribute('ngsrc')).toBe('/images/footer/inforsys.webp');
    expect(logo?.getAttribute('width')).toBe('179');
    expect(logo?.getAttribute('height')).toBe('40');
  });

  it('should render official social and partner links with secure target attributes', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const linkedin = compiled.querySelector('a[aria-label="LinkedIn"]') as HTMLAnchorElement;
    expect(linkedin).toBeTruthy();
    expect(linkedin.getAttribute('href')).toBe('https://id.linkedin.com/company/pt-inforsys-indonesia');
    expect(linkedin.getAttribute('target')).toBe('_blank');
    expect(linkedin.getAttribute('rel')).toBe('noopener noreferrer');

    const komdigi = compiled.querySelector('a[aria-label="Komdigi"]') as HTMLAnchorElement;
    expect(komdigi).toBeTruthy();
    expect(komdigi.getAttribute('href')).toBe('https://pse.komdigi.go.id/pse');
    expect(komdigi.getAttribute('target')).toBe('_blank');
    expect(komdigi.getAttribute('rel')).toBe('noopener noreferrer');

    const instagram = compiled.querySelector('a[aria-label="Instagram"]') as HTMLAnchorElement;
    expect(instagram).toBeTruthy();
    expect(instagram.getAttribute('href')).toBe('https://www.instagram.com/inforsys.co.id/');
    expect(instagram.getAttribute('target')).toBe('_blank');
    expect(instagram.getAttribute('rel')).toBe('noopener noreferrer');

    const facebook = compiled.querySelector('a[aria-label="Facebook"]') as HTMLAnchorElement;
    expect(facebook).toBeTruthy();
    expect(facebook.getAttribute('href')).toBe('https://id-id.facebook.com/inforsys.co.id/');
    expect(facebook.getAttribute('target')).toBe('_blank');
    expect(facebook.getAttribute('rel')).toBe('noopener noreferrer');
  });
});
