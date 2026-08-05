import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtSubmissionComponent } from './ot-submission.component';

describe('OtSubmissionComponent', () => {
  let component: OtSubmissionComponent;
  let fixture: ComponentFixture<OtSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [OtSubmissionComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
