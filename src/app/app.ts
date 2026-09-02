import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoVideoModal } from './components/universal/demo-video-modal/demo-video-modal';
import { Interested } from './components/universal/interested/interested';
import { Footer } from './components/universal/footer/footer';
import { Navbar } from './components/universal/navbar/navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, DemoVideoModal, Interested, Footer, Navbar],
})
export class App {
  protected readonly title = signal('pisicloud.com-v3');
}
