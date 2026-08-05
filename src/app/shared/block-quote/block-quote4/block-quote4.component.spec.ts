/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlockQuote4Component } from './block-quote4.component';

describe('BlockQuote4Component', () => {
  let component: BlockQuote4Component;
  let fixture: ComponentFixture<BlockQuote4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [BlockQuote4Component]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockQuote4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
