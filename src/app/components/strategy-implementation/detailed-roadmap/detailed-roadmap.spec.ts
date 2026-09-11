import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { DetailedRoadmap } from './detailed-roadmap';

describe('DetailedRoadmap', () => {
  let component: DetailedRoadmap;
  let fixture: ComponentFixture<DetailedRoadmap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedRoadmap],
      providers: [provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedRoadmap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create the detailed roadmap component', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 detailed roadmap stages', () => {
    expect(component.steps.length).toBe(5);
    expect(component.currentStep().id).toBe('preparation');
  });

  it('should update active step when setActiveStep is called', () => {
    component.setActiveStep(2);
    fixture.detectChanges();

    expect(component.activeIndex()).toBe(2);
    expect(component.currentStep().id).toBe('realization');
  });

  it('should render section with aria-labelledby and 5 step checkpoints', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const section = compiled.querySelector('section#detailed-roadmap');
    expect(section).toBeTruthy();
    expect(section?.getAttribute('aria-labelledby')).toBe(
      'detailed-roadmap-heading',
    );

    const heading = compiled.querySelector('h2#detailed-roadmap-heading');
    expect(heading).toBeTruthy();
  });
});
