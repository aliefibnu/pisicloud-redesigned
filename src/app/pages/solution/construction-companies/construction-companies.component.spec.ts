import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConstructionCompaniesComponent } from './construction-companies.component';

describe('ConstructionCompaniesComponent', () => {
  let component: ConstructionCompaniesComponent;
  let fixture: ComponentFixture<ConstructionCompaniesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [ConstructionCompaniesComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
