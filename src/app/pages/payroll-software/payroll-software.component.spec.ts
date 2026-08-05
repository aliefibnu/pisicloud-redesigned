import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollSoftwareComponent } from './payroll-software.component';

describe('PayrollSoftwareComponent', () => {
  let component: PayrollSoftwareComponent;
  let fixture: ComponentFixture<PayrollSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PayrollSoftwareComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
