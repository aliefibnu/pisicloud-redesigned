/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemoNowComponent } from './demo-now.component';

describe('DemoNowComponent', () => {
  let component: DemoNowComponent;
  let fixture: ComponentFixture<DemoNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [DemoNowComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
