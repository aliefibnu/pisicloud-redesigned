import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { DemoVideoModalService } from '../../universal/demo-video-modal/demo-video-modal.service';

@Component({
  selector: 'landing-hero',
  imports: [NgOptimizedImage, TranslatePipe],
  templateUrl: './hero.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }

    .hero-gradient {
      background: linear-gradient(115deg, #f6eeec 0%, #edf3ef 32%, #d2ebd7 72%, #e5f1e1 100%);
    }
  `,
})
export class Hero {
  private readonly demoVideoModalService = inject(DemoVideoModalService);

  openPreviewModal(): void {
    this.demoVideoModalService.showModal();
  }
}
