import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServiceCompaniesComponent } from './service-companies.component';

describe('ServiceCompaniesComponent', () => {
  let component: ServiceCompaniesComponent;
  let fixture: ComponentFixture<ServiceCompaniesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [ServiceCompaniesComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
