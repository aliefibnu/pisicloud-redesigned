import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoVideoModal } from './components/universal/demo-video-modal/demo-video-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, DemoVideoModal],
})
export class App {
  protected readonly title = signal('pisicloud.com-v3');
}
