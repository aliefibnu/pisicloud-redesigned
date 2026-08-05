/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlockQuote3Component } from './block-quote3.component';

describe('BlockQuote3Component', () => {
  let component: BlockQuote3Component;
  let fixture: ComponentFixture<BlockQuote3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [BlockQuote3Component]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockQuote3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
