import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { Philosophy } from './philosophy';

describe('Philosophy', () => {
  let component: Philosophy;
  let fixture: ComponentFixture<Philosophy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Philosophy],
      providers: [provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(Philosophy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all 5 philosophy items', () => {
    expect(component.items.length).toBe(5);
  });
});

