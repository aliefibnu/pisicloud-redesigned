import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancePersonalComponent } from './attendance-personal.component';

describe('AttendancePersonalComponent', () => {
  let component: AttendancePersonalComponent;
  let fixture: ComponentFixture<AttendancePersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AttendancePersonalComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendancePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
