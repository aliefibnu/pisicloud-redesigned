import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementationStrategyComponent } from './implementation-strategy.component';

describe('ImplementationStrategyComponent', () => {
  let component: ImplementationStrategyComponent;
  let fixture: ComponentFixture<ImplementationStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ImplementationStrategyComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementationStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
