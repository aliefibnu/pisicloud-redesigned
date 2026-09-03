import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoVideoModal } from './components/universal/demo-video-modal/demo-video-modal';
import { Interested } from './components/universal/interested/interested';
import { Footer } from './components/universal/footer/footer';
import { Navbar } from './components/universal/navbar/navbar';
import { LanguageService } from './core/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, DemoVideoModal, Interested, Footer, Navbar],
})
export class App implements OnInit {
  languageService = inject(LanguageService);
  ngOnInit(): void {
    this.languageService.init();
  }
}
