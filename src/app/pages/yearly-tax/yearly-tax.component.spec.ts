import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyTaxComponent } from './yearly-tax.component';

describe('YearlyTaxComponent', () => {
  let component: YearlyTaxComponent;
  let fixture: ComponentFixture<YearlyTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [YearlyTaxComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
