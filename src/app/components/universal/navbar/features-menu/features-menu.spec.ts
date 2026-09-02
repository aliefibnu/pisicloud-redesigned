import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { FeaturesMenu } from './features-menu';

describe('FeaturesMenu', () => {
  let component: FeaturesMenu;
  let fixture: ComponentFixture<FeaturesMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesMenu],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturesMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
