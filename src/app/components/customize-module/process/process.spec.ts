import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { Process } from './process';

describe('CustomizeModule Process', () => {
  let component: Process;
  let fixture: ComponentFixture<Process>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Process],
      providers: [provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(Process);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 process steps', () => {
    expect(component.steps.length).toBe(4);
  });
});
