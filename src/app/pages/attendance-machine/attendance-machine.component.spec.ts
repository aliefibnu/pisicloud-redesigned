import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceMachineComponent } from './attendance-machine.component';

describe('AttendanceMachineComponent', () => {
  let component: AttendanceMachineComponent;
  let fixture: ComponentFixture<AttendanceMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AttendanceMachineComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
