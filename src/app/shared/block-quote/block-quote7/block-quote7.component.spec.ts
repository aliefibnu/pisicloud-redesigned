/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlockQuote7Component } from './block-quote7.component';

describe('BlockQuote7Component', () => {
  let component: BlockQuote7Component;
  let fixture: ComponentFixture<BlockQuote7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [BlockQuote7Component]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockQuote7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
