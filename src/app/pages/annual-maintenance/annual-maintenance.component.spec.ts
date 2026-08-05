import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnnualMaintenanceComponent } from './annual-maintenance.component';

describe('AnnualMaintenanceComponent', () => {
  let component: AnnualMaintenanceComponent;
  let fixture: ComponentFixture<AnnualMaintenanceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [AnnualMaintenanceComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
