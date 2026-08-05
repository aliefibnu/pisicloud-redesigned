/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlockQuote5Component } from './block-quote5.component';

describe('BlockQuote5Component', () => {
  let component: BlockQuote5Component;
  let fixture: ComponentFixture<BlockQuote5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [BlockQuote5Component]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockQuote5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
