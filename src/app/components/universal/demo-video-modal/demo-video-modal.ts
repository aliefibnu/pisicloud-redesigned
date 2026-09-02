import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  ElementRef,
  viewChild,
} from '@angular/core';

import '@videojs/html/video/player';
import '@videojs/html/video/skin';
import { DemoVideoModalService } from './demo-video-modal.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapX, bootstrapXCircle } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'demo-video-modal',
  imports: [NgIcon],
  providers: [
    provideIcons({
      bootstrapX,
      bootstrapXCircle,
    }),
  ],
  templateUrl: './demo-video-modal.html',
  styles: `
    :host {
      display: contents;
    }
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  host: {
    '(document:keydown.escape)': 'onEscape()',
  },
})
export class DemoVideoModal {
  modalService = inject(DemoVideoModalService);
  videoElement = viewChild<ElementRef<HTMLVideoElement>>('videoPlayer');

  modalClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  onEscape() {
    if (this.modalService.isOpen()) {
      this.closeModal();
    }
  }

  closeModal() {
    const video = this.videoElement()?.nativeElement;
    if (video) {
      video.pause();
    }
    this.modalService.hideModal();
  }
}

