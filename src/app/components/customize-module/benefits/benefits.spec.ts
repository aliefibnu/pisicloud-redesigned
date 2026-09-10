import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { Benefits } from './benefits';

describe('CustomizeModule Benefits', () => {
  let component: Benefits;
  let fixture: ComponentFixture<Benefits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Benefits],
      providers: [provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(Benefits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 benefit items', () => {
    expect(component.items.length).toBe(4);
  });
});
