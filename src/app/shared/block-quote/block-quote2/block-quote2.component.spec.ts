/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlockQuote2Component } from './block-quote2.component';

describe('BlockQuote2Component', () => {
  let component: BlockQuote2Component;
  let fixture: ComponentFixture<BlockQuote2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [BlockQuote2Component]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockQuote2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
