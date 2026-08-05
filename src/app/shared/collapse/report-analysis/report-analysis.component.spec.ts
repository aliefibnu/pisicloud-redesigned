/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReportAnalysisComponent } from './report-analysis.component';

describe('ReportAnalysisComponent', () => {
  let component: ReportAnalysisComponent;
  let fixture: ComponentFixture<ReportAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [ReportAnalysisComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
