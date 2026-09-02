import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, input, signal } from '@angular/core';

import '@videojs/html/video/player';
import '@videojs/html/video/skin';
import { DemoVideoModalService } from './demo-video-modal.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapXCircle } from '@ng-icons/bootstrap-icons';
@Component({
  selector: 'demo-video-modal',
  imports: [NgIcon],
  providers: [
    provideIcons({
      bootstrapXCircle,
    }),
  ],
  templateUrl: './demo-video-modal.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DemoVideoModal {
  modalService = inject(DemoVideoModalService);
  display = this.modalService.display;

  modalClick(event: MouseEvent) {
    if (event.target === event.currentTarget) this.modalService.hideModal();
  }
}
