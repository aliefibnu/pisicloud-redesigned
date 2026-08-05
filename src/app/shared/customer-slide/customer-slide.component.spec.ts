/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CustomerSlideComponent } from './customer-slide.component';

describe('CustomerSlideComponent', () => {
  let component: CustomerSlideComponent;
  let fixture: ComponentFixture<CustomerSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [CustomerSlideComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
