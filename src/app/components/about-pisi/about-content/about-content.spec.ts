import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { AboutContent } from './about-content';

describe('AboutContent', () => {
  let component: AboutContent;
  let fixture: ComponentFixture<AboutContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutContent],
      providers: [provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 tabs and switch tab on selectTab', () => {
    expect(component.tabs.length).toBe(4);
    expect(component.activeTab()).toBe(0);

    component.selectTab(2);
    expect(component.activeTab()).toBe(2);
    expect(component.currentTab().id).toBe(2);
  });

  it('should render accordion-grid elements for each milestone tab', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const accordionGrids = compiled.querySelectorAll('.accordion-grid');
    expect(accordionGrids.length).toBe(4);

    const buttons = compiled.querySelectorAll('button[role="tab"]');
    expect(buttons.length).toBe(4);
  });
});

