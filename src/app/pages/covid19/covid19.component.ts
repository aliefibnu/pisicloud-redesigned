import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
//import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { ScrollspyDirective } from '../../shared/scrollspy.directive';

@Component({
    selector: 'app-covid19',
    templateUrl: './covid19.component.html',
    styleUrls: ['./covid19.component.scss'],
    encapsulation: ViewEncapsulation.None,
    styles: [`
  .dark-modal .modal-content {
    background-color: #000000;
    color: white;
    background: none;
    border: none;
  }
  .dark-modal .modal-header {
    border : none
  }
  .dark-modal .close {
    color: white;
  }
  .dark-modal .modal-dialog {
    max-width: 800px
  }
`],
    standalone: true,
    imports: [ScrollspyDirective,  TranslateModule]
})
export class Covid19Component implements OnInit {

  currentSection = '';
  emailContact: string = 'hello@inforsys.co.id';
  
  savedLang = localStorage.getItem('lang');

  constructor(private translate: TranslateService, private modalService: NgbModal) { }

  ngOnInit() {
    this.setLanguage();
  }

  private setLanguage() {
    this.translate.addLangs(['id', 'en']);
    this.translate.setDefaultLang(!this.savedLang ? 'id' : this.savedLang);
  }


  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('nav-sticky');
    } else {
      navbar.classList.remove('nav-sticky');
    }
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }

  /**
   * Login modal
   */
  loginModal(content) {
    this.modalService.open(content, { centered: true });
  }

  /**
   * Register modal
   * @param registercontent content
   */
  registerModal(registercontent) {
    this.modalService.open(registercontent, { centered: true });
  }

  /**
   * Open modal for show the video
   * @param content content of modal
   */
  openWindowCustomClass(videocontent) {
    this.modalService.open(videocontent, { windowClass: 'dark-modal', centered: true });
  }
}
