/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlockQuote9Component } from './block-quote9.component';

describe('BlockQuote9Component', () => {
  let component: BlockQuote9Component;
  let fixture: ComponentFixture<BlockQuote9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [BlockQuote9Component]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockQuote9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
