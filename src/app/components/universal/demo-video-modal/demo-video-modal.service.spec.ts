import { TestBed } from '@angular/core/testing';

import { DemoVideoModalService } from './demo-video-modal.service';

describe('DemoVideoModalService', () => {
  let service: DemoVideoModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoVideoModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
