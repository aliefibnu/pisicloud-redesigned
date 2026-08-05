import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Covid19Component } from './covid19.component';

describe('Covid19Component', () => {
  let component: Covid19Component;
  let fixture: ComponentFixture<Covid19Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [Covid19Component]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
