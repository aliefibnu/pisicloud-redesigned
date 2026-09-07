import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhyChoseUs } from './why-chose-us';

describe('WhyChoseUs', () => {
  let component: WhyChoseUs;
  let fixture: ComponentFixture<WhyChoseUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyChoseUs],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyChoseUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the why-choose-us component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the main section header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector('h2');
    expect(header?.textContent).toContain('Why Choose');
    expect(header?.textContent).toContain('PISICloud');
  });

  it('should have flex-1 on the bottom card of each column for consistent alignment', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const outerGrid = compiled.querySelector('.grid.md\\:grid-cols-3');
    const columns = outerGrid ? Array.from(outerGrid.children) : [];
    expect(columns.length).toBe(3);
    columns.forEach((col) => {
      const cards = col.children;
      const lastCard = cards[cards.length - 1];
      expect(lastCard.classList.contains('flex-1')).toBe(true);
    });
  });
});