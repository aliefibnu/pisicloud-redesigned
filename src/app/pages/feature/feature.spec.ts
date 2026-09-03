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
});
