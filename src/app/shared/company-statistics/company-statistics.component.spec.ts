/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompanyStatisticsComponent } from './company-statistics.component';

describe('CompanyStatisticsComponent', () => {
  let component: CompanyStatisticsComponent;
  let fixture: ComponentFixture<CompanyStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [CompanyStatisticsComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
