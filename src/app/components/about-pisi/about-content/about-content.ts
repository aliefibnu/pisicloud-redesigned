import {
  Component,
  OnInit,
  OnDestroy,
  computed,
  inject,
  signal,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerArrowRight, tablerArrowUpRight } from '@ng-icons/tabler-icons';
import { LanguageService } from '../../../core/language.service';

export interface TabPart {
  text: string;
  highlight?: boolean;
  bold?: boolean;
}

export interface AboutTabItem {
  id: number;
  labelKey: string;
  tagKey: string;
  titleKey: string;
  descKey: string;
  image: string;
  altKey: string;
  parts: TabPart[];
}

@Component({
  selector: 'about-pisi-content, app-about-content',
  imports: [NgOptimizedImage, TranslatePipe, NgIcon],
  viewProviders: [
    provideIcons({
      tablerArrowRight,
      tablerArrowUpRight,
    }),
  ],
  templateUrl: './about-content.html',
  styleUrl: './about-content.css',
})
export class AboutContent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly languageService = inject(LanguageService);

  readonly isEnglish = computed(() => this.languageService.currentLanguage() === 'en');

  readonly duration = 5000;
  readonly tickInterval = 50;

  readonly activeTab = signal<number>(0);
  readonly progress = signal<number>(0);
  readonly isPaused = signal<boolean>(false);

  private timerId: ReturnType<typeof setInterval> | null = null;

  readonly tabs: AboutTabItem[] = [
    {
      id: 0,
      labelKey: 'ABOUT_PISI.ABOUT_CONTENT.TABS.TAB1.LABEL',
      tagKey: 'ABOUT_PISI.ABOUT_CONTENT.TABS.TAB1.TAG',
      titleKey: 'ABOUT_PISI.ABOUT_CONTENT.TABS.TAB1.TITLE',
      descKey: 'ABOUT_PISI.ABOUT_CONTENT.TABS.TAB1.DESCRIPTION',
      image: '/images/about-pisi/about-office.webp',
      altKey: 'ABOUT_PISI.ABOUT_CONTENT.ALT_OFFICE',
      parts: [
        { text: 'Started', highlight: true, bold: true },
        { text: ' Developed ', highlight: false },
        { text: 'Since 1998', highlight: true, bold: true },
      ],
    },
    {
      id: 1,
      labelKey: 'ABOUT_PISI.ABOUT_CONTENT.TABS.TAB2.LABEL',
      tagKey: 'ABOUT_PISI.ABOUT_CONTENT.TABS.TAB2.TAG',
      titleKey: 'ABOUT_PISI.ABOUT_CONTENT.TABS.TAB2.TITLE',
      descKey: 'ABOUT_PISI.ABOUT_CONTENT.TABS.TAB2.DESCRIPTION',
      image: '/images/about-pisi/about-rnd.webp',
      altKey: 'ABOUT_PISI.ABOUT_CONTENT.TABS.TAB2.TITLE',
      parts: [
        { text: 'Research & ', highlight: true },
        { text: 'Development Products ', highlight: false },
        { text: 'Continuous', highlight: true },
      ],
    },
    {
      id: 2,
      labelKey: 'ABOUT_PISI.ABOUT_CONTENT.TABS.TAB3.LABEL',
      tagKey: 'ABOUT_PISI.ABOUT_CONTENT.TABS.TAB3.TAG',
      titleKey: 'ABOUT_PISI.ABOUT_CONTENT.TABS.TAB3.TITLE',
      descKey: 'ABOUT_PISI.ABOUT_CONTENT.TABS.TAB3.DESCRIPTION',
      image: '/images/about-pisi/about-segmentation.webp',
      altKey: 'ABOUT_PISI.ABOUT_CONTENT.TABS.TAB3.TITLE',
      parts: [
        { text: 'Product Segmentation ', highlight: true },
        { text: 'in Small and Medium ', highlight: false },
        { text: 'Level Industries', highlight: true },
      ],
    },
    {
      id: 3,
      labelKey: 'ABOUT_PISI.ABOUT_CONTENT.TABS.TAB4.LABEL',
      tagKey: 'ABOUT_PISI.ABOUT_CONTENT.TABS.TAB4.TAG',
      titleKey: 'ABOUT_PISI.ABOUT_CONTENT.TABS.TAB4.TITLE',
      descKey: 'ABOUT_PISI.ABOUT_CONTENT.TABS.TAB4.DESCRIPTION',
      image: '/images/about-pisi/about-commitment.webp',
      altKey: 'ABOUT_PISI.ABOUT_CONTENT.TABS.TAB4.TITLE',
      parts: [
        { text: 'Commitment ', highlight: true },
        { text: "to Be the Best Solution for Customer's ", highlight: false },
        { text: 'IT Needs', highlight: true },
      ],
    },
  ];

  readonly currentTab = computed(() => this.tabs[this.activeTab()] ?? this.tabs[0]);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startTimer();
    }
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.stopTimer();
    if (isPlatformBrowser(this.platformId)) {
      this.timerId = setInterval(() => {
        if (!this.isPaused()) {
          const step = (this.tickInterval / this.duration) * 100;
          this.progress.update((p) => {
            const next = p + step;
            if (next >= 100) {
              this.nextTab();
              return 0;
            }
            return next;
          });
        }
      }, this.tickInterval);
    }
  }

  stopTimer() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  nextTab() {
    this.activeTab.update((curr) => (curr + 1) % this.tabs.length);
    this.progress.set(0);
  }

  selectTab(id: number): void {
    this.activeTab.set(id);
    this.progress.set(0);
  }

  pauseAutoPlay(): void {
    this.isPaused.set(true);
  }

  resumeAutoPlay(): void {
    this.isPaused.set(false);
  }

  onKeyDown(event: KeyboardEvent, index: number): void {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const next = (index + 1) % this.tabs.length;
      this.selectTab(next);
      this.focusTab(next);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prev = (index - 1 + this.tabs.length) % this.tabs.length;
      this.selectTab(prev);
      this.focusTab(prev);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectTab(index);
    }
  }

  private focusTab(index: number): void {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById('about-tab-' + index);
      el?.focus();
    }
  }
}

export { AboutContent as AboutContentComponent };
