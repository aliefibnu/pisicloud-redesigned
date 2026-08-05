/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FaCollapseComponent } from './fa-collapse.component';

describe('FaCollapseComponent', () => {
  let component: FaCollapseComponent;
  let fixture: ComponentFixture<FaCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [FaCollapseComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
