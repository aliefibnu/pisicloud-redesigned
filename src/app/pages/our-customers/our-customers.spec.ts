import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCustomers } from './our-customers';

describe('OurCustomers', () => {
  let component: OurCustomers;
  let fixture: ComponentFixture<OurCustomers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurCustomers],
    }).compileComponents();

    fixture = TestBed.createComponent(OurCustomers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
