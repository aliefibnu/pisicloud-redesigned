import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageMenu } from './language-menu';

describe('LanguageMenu', () => {
  let component: LanguageMenu;
  let fixture: ComponentFixture<LanguageMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
