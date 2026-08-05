/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlockQuote10Component } from './block-quote10.component';

describe('BlockQuote10Component', () => {
  let component: BlockQuote10Component;
  let fixture: ComponentFixture<BlockQuote10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [BlockQuote10Component]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockQuote10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
