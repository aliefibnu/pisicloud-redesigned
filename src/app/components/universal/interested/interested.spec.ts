import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interested } from './interested';

describe('Interested', () => {
  let component: Interested;
  let fixture: ComponentFixture<Interested>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interested],
    }).compileComponents();

    fixture = TestBed.createComponent(Interested);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
