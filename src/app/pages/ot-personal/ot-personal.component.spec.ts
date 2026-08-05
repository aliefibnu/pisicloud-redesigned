import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtPersonalComponent } from './ot-personal.component';

describe('OtPersonalComponent', () => {
  let component: OtPersonalComponent;
  let fixture: ComponentFixture<OtPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [OtPersonalComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
