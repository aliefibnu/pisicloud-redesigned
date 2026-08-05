/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlockQuote11Component } from './block-quote11.component';

describe('BlockQuote11Component', () => {
  let component: BlockQuote11Component;
  let fixture: ComponentFixture<BlockQuote11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [BlockQuote11Component]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockQuote11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
