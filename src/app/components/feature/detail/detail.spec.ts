import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { provideTranslateService } from '@ngx-translate/core';
import { vi } from 'vitest';
import { Detail } from './detail';
import { getDefaultFeature } from '../../../data/features';

describe('Detail', () => {
  let component: Detail;
  let fixture: ComponentFixture<Detail>;
  const mockItems = getDefaultFeature().items;

  beforeEach(async () => {
    vi.useFakeTimers();

    await TestBed.configureTestingModule({
      imports: [Detail],
      providers: [
        provideTranslateService(),
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Detail);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('items', mockItems);
    component.ngOnInit();
    fixture.detectChanges();
  });

  afterEach(() => {
    component.ngOnDestroy();
    vi.useRealTimers();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load feature items from input', () => {
    const items = component.items();
    expect(items).toBeTruthy();
    expect(items.length).toBe(5);
    expect(items[0].id).toBe('application-submission');
  });

  it('should start with activeIndex 0 and progress 0', () => {
    expect(component.activeIndex()).toBe(0);
    expect(component.progress()).toBe(0);
  });

  it('should select feature manually when selectFeature is called', () => {
    component.selectFeature(2);
    expect(component.activeIndex()).toBe(2);
    expect(component.progress()).toBe(0);
  });

  it('should advance to next feature and wrap around', () => {
    component.activeIndex.set(4);
    component.nextFeature();
    expect(component.activeIndex()).toBe(0);
    expect(component.progress()).toBe(0);
  });

  it('should pause and resume auto-advance timer on hover', () => {
    expect(component.isPaused()).toBe(false);
    component.pauseAutoPlay();
    expect(component.isPaused()).toBe(true);
    component.resumeAutoPlay();
    expect(component.isPaused()).toBe(false);
  });

  it('should handle keyboard navigation for Enter and Space', () => {
    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });

    component.onKeyDown(enterEvent, 1);
    expect(component.activeIndex()).toBe(1);

    component.onKeyDown(spaceEvent, 3);
    expect(component.activeIndex()).toBe(3);
  });

  it('should handle keyboard navigation for Arrow keys', () => {
    const arrowDown = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    const arrowUp = new KeyboardEvent('keydown', { key: 'ArrowUp' });

    component.activeIndex.set(1);
    component.onKeyDown(arrowDown, 1);
    expect(component.activeIndex()).toBe(2);

    component.onKeyDown(arrowUp, 2);
    expect(component.activeIndex()).toBe(1);
  });

  it('should render active card with progress bar and inactive cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const activeTab = compiled.querySelector('[role="tab"][aria-selected="true"]');
    expect(activeTab).toBeTruthy();

    const progressBar = compiled.querySelector('[role="progressbar"]');
    expect(progressBar).toBeTruthy();

    const tabs = compiled.querySelectorAll('[role="tab"]');
    expect(tabs.length).toBe(5);
  });

  it('should increment progress when timer ticks and advance to next feature at 100%', () => {
    component.activeIndex.set(0);
    component.progress.set(0);
    component.isPaused.set(false);
    component.startTimer();

    // Fast-forward duration
    vi.advanceTimersByTime(component.duration + component.tickInterval);
    expect(component.activeIndex()).toBe(1);

    component.stopTimer();
  });

  it('should not increment progress when paused', () => {
    component.activeIndex.set(0);
    component.progress.set(0);
    component.startTimer();
    component.pauseAutoPlay();

    vi.advanceTimersByTime(1000);
    expect(component.progress()).toBe(0);
    expect(component.activeIndex()).toBe(0);

    component.stopTimer();
  });
});
