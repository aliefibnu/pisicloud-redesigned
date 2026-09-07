import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutUsComponent } from './about-us';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the main heading text correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h1');
    expect(heading?.textContent).toContain('A unified architecture for modern workforce management.');
  });

  it('should render the paragraph description correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const paragraph = compiled.querySelector('p');
    expect(paragraph?.textContent).toContain('Break down silos with a seamlessly integrated suite');
  });
});