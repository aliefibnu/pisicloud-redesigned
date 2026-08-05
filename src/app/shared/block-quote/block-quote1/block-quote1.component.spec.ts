/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlockQuote1Component } from './block-quote1.component';

describe('BlockQuote1Component', () => {
  let component: BlockQuote1Component;
  let fixture: ComponentFixture<BlockQuote1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [BlockQuote1Component]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockQuote1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
