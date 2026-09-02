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
});