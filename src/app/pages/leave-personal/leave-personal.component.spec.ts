import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavePersonalComponent } from './leave-personal.component';

describe('LeavePersonalComponent', () => {
  let component: LeavePersonalComponent;
  let fixture: ComponentFixture<LeavePersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [LeavePersonalComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
