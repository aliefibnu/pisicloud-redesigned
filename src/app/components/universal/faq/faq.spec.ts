import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Faq } from './faq';

describe('Faq', () => {
  let component: Faq;
  let fixture: ComponentFixture<Faq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Faq],
    }).compileComponents();

    fixture = TestBed.createComponent(Faq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the faq component', () => {
    expect(component).toBeTruthy();
  });

  it('should render all 5 FAQ items', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.border.border-gray-200');
    expect(cards.length).toBe(5);
  });

  it('should toggle openIndex when toggleFaq is called', () => {
    expect(component.openIndex()).toBeNull();

    component.toggleFaq(0);
    expect(component.openIndex()).toBe(0);

    component.toggleFaq(0);
    expect(component.openIndex()).toBeNull();

    component.toggleFaq(2);
    expect(component.openIndex()).toBe(2);
  });

  it('should apply rotate-45 on the icon container when an item is expanded', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('button[aria-label="Toggle accordion"]');
    expect(buttons.length).toBe(5);

    const firstIcon = buttons[0].querySelector('div');
    expect(firstIcon?.classList.contains('rotate-45')).toBe(false);

    // Expand first item
    component.toggleFaq(0);
    fixture.detectChanges();

    expect(firstIcon?.classList.contains('rotate-45')).toBe(true);

    // Collapse first item
    component.toggleFaq(0);
    fixture.detectChanges();

    expect(firstIcon?.classList.contains('rotate-45')).toBe(false);
  });

  it('should apply active green border and shadow-sm when open', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.border.border-gray-200');
    const firstCard = cards[0];

    expect(firstCard.classList.contains('border-[#0b6953]')).toBe(false);
    expect(firstCard.classList.contains('shadow-sm')).toBe(false);

    component.toggleFaq(0);
    fixture.detectChanges();

    expect(firstCard.classList.contains('border-[#0b6953]')).toBe(true);
    expect(firstCard.classList.contains('shadow-sm')).toBe(true);
  });

  it('should update aria-expanded on button when toggled', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const firstButton = compiled.querySelector('button[aria-label="Toggle accordion"]');

    expect(firstButton?.getAttribute('aria-expanded')).toBe('false');

    component.toggleFaq(0);
    fixture.detectChanges();

    expect(firstButton?.getAttribute('aria-expanded')).toBe('true');
  });
});
