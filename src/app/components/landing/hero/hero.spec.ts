import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { Hero } from './hero';
import { DemoVideoModalService } from '../../universal/demo-video-modal/demo-video-modal.service';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;
  let modalService: DemoVideoModalService;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
      providers: [
        provideTranslateService({
          fallbackLang: 'en',
        }),
      ],
    }).compileComponents();

    translateService = TestBed.inject(TranslateService);
    modalService = TestBed.inject(DemoVideoModalService);

    translateService.setTranslation('en', {
      LANDING: {
        HERO: {
          TITLE_LINE_1: 'Efficient HR Management',
          TITLE_LINE_2_PREFIX: 'with ',
          BRAND: 'PISICloud',
          TITLE_LINE_2_SUFFIX: ' HRM',
          DESCRIPTION:
            'Cloud-based Attendance, Payroll, and HR software for secure, easy, and efficient employee management.',
          CONTACT_US: 'Contact Us',
          WATCH_PREVIEW: 'Watch Preview Video',
          IMAGE_ALT:
            'PISICloud HR Management dashboard preview on a modern tablet displaying recruitment table with analytics and mobile icons',
        },
      },
    });
    translateService.use('en');

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the main headline with highlighted brand name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const headline = compiled.querySelector('h1#hero-heading');
    expect(headline).toBeTruthy();
    expect(headline?.textContent).toContain('Efficient HR Management');
    expect(headline?.textContent).toContain('with PISICloud HRM');

    const brandSpan = headline?.querySelector('span.text-\\[\\#076657\\]');
    expect(brandSpan?.textContent?.trim()).toBe('PISICloud');
  });

  it('should render the description paragraph', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const desc = compiled.querySelector('p');
    expect(desc?.textContent).toContain('Cloud-based Attendance, Payroll, and HR software');
  });

  it('should render Contact Us CTA link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const contactBtn = compiled.querySelector('a[href="#contact"]');
    expect(contactBtn).toBeTruthy();
    expect(contactBtn?.textContent?.trim()).toBe('Contact Us');
    expect(contactBtn?.getAttribute('aria-label')).toBe('Contact Us');
    expect(contactBtn?.querySelector('svg')).toBeTruthy();
  });

  it('should trigger modalService.showModal when Watch Preview Video button is clicked', () => {
    const spy = vi.spyOn(modalService, 'showModal');
    const compiled = fixture.nativeElement as HTMLElement;
    const previewBtn = compiled.querySelector('button[aria-label="Watch Preview Video"]') as HTMLButtonElement;

    expect(previewBtn).toBeTruthy();
    expect(previewBtn.textContent).toContain('Watch Preview Video');

    previewBtn.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should format the headline into exactly two non-wrapping block lines', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const headline = compiled.querySelector('h1#hero-heading');
    expect(headline).toBeTruthy();

    const lineSpans = headline?.querySelectorAll(':scope > span.block.whitespace-nowrap');
    expect(lineSpans?.length).toBe(2);
    expect(lineSpans?.[0].textContent?.trim()).toBe('Efficient HR Management');
    expect(lineSpans?.[1].textContent?.trim()).toBe('with PISICloud HRM');
  });

  it('should render the Indonesian headline correctly across exactly two lines', () => {
    translateService.setTranslation('id', {
      LANDING: {
        HERO: {
          TITLE_LINE_1: 'Manajemen SDM Efisien',
          TITLE_LINE_2_PREFIX: 'bersama ',
          BRAND: 'PISICloud',
          TITLE_LINE_2_SUFFIX: ' HRM',
          DESCRIPTION:
            'Software Absensi, Payroll, dan HR berbasis cloud untuk pengelolaan karyawan yang aman, mudah, dan efisien.',
          CONTACT_US: 'Hubungi Kami',
          WATCH_PREVIEW: 'Tonton Video Preview',
          IMAGE_ALT:
            'Pratinjau dashboard manajemen SDM PISICloud pada tablet modern menampilkan tabel rekrutmen dengan analitik dan ikon interaktif',
        },
      },
    });
    translateService.use('id');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const headline = compiled.querySelector('h1#hero-heading');
    const lineSpans = headline?.querySelectorAll(':scope > span.block.whitespace-nowrap');

    expect(lineSpans?.length).toBe(2);
    expect(lineSpans?.[0].textContent?.trim()).toBe('Manajemen SDM Efisien');
    expect(lineSpans?.[1].textContent?.trim()).toBe('bersama PISICloud HRM');
  });

  it('should render the hero 3D tablet illustration with priority', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('ngsrc')).toBe('/images/landing/hero-image.png');
    expect(img?.getAttribute('width')).toBe('1398');
    expect(img?.getAttribute('height')).toBe('1125');
    expect(img?.hasAttribute('priority')).toBe(true);
  });
});
