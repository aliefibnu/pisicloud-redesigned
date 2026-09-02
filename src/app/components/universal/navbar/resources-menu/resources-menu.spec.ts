import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ResourcesMenu } from './resources-menu';

describe('ResourcesMenu', () => {
  let component: ResourcesMenu;
  let fixture: ComponentFixture<ResourcesMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesMenu],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourcesMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
