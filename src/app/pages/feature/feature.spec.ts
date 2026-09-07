import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { Feature } from './feature';

describe('Feature', () => {
  let component: Feature;
  let fixture: ComponentFixture<Feature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Feature],
      providers: [provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(Feature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to recruitment feature when no slug is passed', () => {
    expect(component.currentFeature().id).toBe('recruitment');
    expect(component.heroConfig().titleKey).toBe('FEATURE.RECRUITMENT.HERO.TITLE');
    expect(component.detailItems().length).toBe(6);
  });

  it('should dynamically switch feature when slug input changes', () => {
    fixture.componentRef.setInput('slug', 'attendance');
    fixture.detectChanges();

    expect(component.currentFeature().id).toBe('attendance');
    expect(component.heroConfig().titleKey).toBe('FEATURE.ATTENDANCE.HERO.TITLE');
    expect(component.detailItems().length).toBe(7);
  });

  it('should fallback to default feature when unknown slug is provided', () => {
    fixture.componentRef.setInput('slug', 'unknown-feature');
    fixture.detectChanges();

    expect(component.currentFeature().id).toBe('recruitment');
  });
});
