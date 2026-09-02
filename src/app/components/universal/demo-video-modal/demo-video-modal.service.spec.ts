import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { vi } from 'vitest';
import { DemoVideoModalService } from './demo-video-modal.service';

describe('DemoVideoModalService', () => {
  let service: DemoVideoModalService;

  beforeEach(() => {
    vi.useFakeTimers();
    TestBed.configureTestingModule({
      providers: [{ provide: PLATFORM_ID, useValue: 'browser' }],
    });
    service = TestBed.inject(DemoVideoModalService);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.isOpen()).toBe(false);
    expect(service.isVisible()).toBe(false);
  });

  it('should show modal and set visibility and open flags', () => {
    service.showModal();
    expect(service.isVisible()).toBe(true);
    expect(service.display()).toBe('flex');

    // Trigger animation frame callbacks
    vi.advanceTimersByTime(50);
  });

  it('should hide modal and reset flags after delay', () => {
    service.showModal();
    service.hideModal();
    expect(service.isOpen()).toBe(false);

    vi.advanceTimersByTime(350);
    expect(service.isVisible()).toBe(false);
    expect(service.display()).toBe('hidden');
  });
});

