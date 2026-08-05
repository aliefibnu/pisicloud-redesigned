import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveSubmissionComponent } from './leave-submission.component';

describe('LeaveSubmissionComponent', () => {
  let component: LeaveSubmissionComponent;
  let fixture: ComponentFixture<LeaveSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [LeaveSubmissionComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
