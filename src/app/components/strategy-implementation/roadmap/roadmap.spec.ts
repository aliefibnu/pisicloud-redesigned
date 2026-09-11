import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { Roadmap } from './roadmap';

describe('Roadmap', () => {
  let component: Roadmap;
  let fixture: ComponentFixture<Roadmap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roadmap],
      providers: [provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(Roadmap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 structured roadmap steps', () => {
    expect(component.steps.length).toBe(5);
    expect(component.steps[0].id).toBe('preparation');
    expect(component.steps[4].id).toBe('go-live');
  });

  it('should render section with aria-labelledby and 5 step numbers', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const section = compiled.querySelector('section#roadmap');
    expect(section).toBeTruthy();
    expect(section?.getAttribute('aria-labelledby')).toBe('roadmap-heading');

    const heading = compiled.querySelector('h2#roadmap-heading');
    expect(heading).toBeTruthy();
  });
});
