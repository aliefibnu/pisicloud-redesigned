import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoVideoModal } from './demo-video-modal';
import { DemoVideoModalService } from './demo-video-modal.service';

describe('DemoVideoModal', () => {
  let component: DemoVideoModal;
  let fixture: ComponentFixture<DemoVideoModal>;
  let modalService: DemoVideoModalService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoVideoModal],
      providers: [DemoVideoModalService],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoVideoModal);
    component = fixture.componentInstance;
    modalService = TestBed.inject(DemoVideoModalService);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call closeModal when backdrop is clicked', () => {
    modalService.showModal();
    fixture.detectChanges();

    const backdrop = fixture.nativeElement.querySelector('[role="dialog"]');
    expect(backdrop).toBeTruthy();

    const event = { target: backdrop, currentTarget: backdrop } as unknown as MouseEvent;
    component.modalClick(event);
    expect(modalService.isOpen()).toBe(false);
  });

  it('should close when onEscape is triggered and modal is open', () => {
    modalService.showModal();
    modalService.isOpen.set(true);

    component.onEscape();
    expect(modalService.isOpen()).toBe(false);
  });
});

