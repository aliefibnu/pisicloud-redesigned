/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlockQuote6Component } from './block-quote6.component';

describe('BlockQuote6Component', () => {
  let component: BlockQuote6Component;
  let fixture: ComponentFixture<BlockQuote6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [BlockQuote6Component]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockQuote6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
