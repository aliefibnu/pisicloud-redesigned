import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomizeModuleComponent } from './customize-module.component';

describe('CustomizeModuleComponent', () => {
  let component: CustomizeModuleComponent;
  let fixture: ComponentFixture<CustomizeModuleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [CustomizeModuleComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
