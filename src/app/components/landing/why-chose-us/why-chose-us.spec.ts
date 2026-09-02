import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhyChooseUsComponent } from './why-chose-us';

describe('WhyChooseUsComponent', () => {
  let component: WhyChooseUsComponent;
  let fixture: ComponentFixture<WhyChooseUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyChooseUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyChooseUsComponent);
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