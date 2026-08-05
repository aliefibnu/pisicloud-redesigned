/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlockQuote8Component } from './block-quote8.component';

describe('BlockQuote8Component', () => {
  let component: BlockQuote8Component;
  let fixture: ComponentFixture<BlockQuote8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [BlockQuote8Component]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockQuote8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
