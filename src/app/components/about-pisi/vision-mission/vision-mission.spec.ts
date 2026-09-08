import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { VisionMission } from './vision-mission';

describe('VisionMission', () => {
  let component: VisionMission;
  let fixture: ComponentFixture<VisionMission>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionMission],
      providers: [provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(VisionMission);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all 4 mission cards', () => {
    expect(component.missionCards.length).toBe(4);
  });
});

