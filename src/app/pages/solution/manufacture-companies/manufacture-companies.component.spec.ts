import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ManufactureCompaniesComponent } from './manufacture-companies.component';

describe('ManufactureCompaniesComponent', () => {
  let component: ManufactureCompaniesComponent;
  let fixture: ComponentFixture<ManufactureCompaniesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [ManufactureCompaniesComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufactureCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
