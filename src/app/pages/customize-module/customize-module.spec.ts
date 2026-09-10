import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { provideRouter } from '@angular/router';
import { CustomizeModule } from './customize-module';

describe('CustomizeModule Page', () => {
  let component: CustomizeModule;
  let fixture: ComponentFixture<CustomizeModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizeModule],
      providers: [provideTranslateService(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomizeModule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
