import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoVideoModal } from './demo-video-modal';

describe('DemoVideoModal', () => {
  let component: DemoVideoModal;
  let fixture: ComponentFixture<DemoVideoModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoVideoModal],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoVideoModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
