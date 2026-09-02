import { Service, signal } from '@angular/core';

@Service()
export class DemoVideoModalService {
  display = signal('hidden');

  showModal() {
    this.display.set('flex');
  }
  hideModal() {
    this.display.set('hidden');
  }
}
