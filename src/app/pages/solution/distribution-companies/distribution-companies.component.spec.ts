import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DistributionCompaniesComponent } from './distribution-companies.component';

describe('DistributionCompaniesComponent', () => {
  let component: DistributionCompaniesComponent;
  let fixture: ComponentFixture<DistributionCompaniesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [DistributionCompaniesComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
