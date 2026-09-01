import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChoseUs } from './why-chose-us';

describe('WhyChoseUs', () => {
  let component: WhyChoseUs;
  let fixture: ComponentFixture<WhyChoseUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyChoseUs],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyChoseUs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
