import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceSoftwareComponent } from './attendance-software.component';

describe('AttendanceSoftwareComponent', () => {
  let component: AttendanceSoftwareComponent;
  let fixture: ComponentFixture<AttendanceSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AttendanceSoftwareComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
