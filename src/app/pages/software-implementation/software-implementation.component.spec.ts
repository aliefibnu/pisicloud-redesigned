import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SoftwareImplementationComponent } from './software-implementation.component';

describe('SoftwareImplementationComponent', () => {
  let component: SoftwareImplementationComponent;
  let fixture: ComponentFixture<SoftwareImplementationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [SoftwareImplementationComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
