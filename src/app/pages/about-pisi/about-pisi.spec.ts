import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPisi } from './about-pisi';

describe('AboutPisi', () => {
  let component: AboutPisi;
  let fixture: ComponentFixture<AboutPisi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPisi],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPisi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
