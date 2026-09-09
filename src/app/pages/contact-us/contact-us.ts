import { Component } from '@angular/core';
import { ContactInfo } from '../../components/contact-us/contact-info/contact-info';
import { Faq } from '../../components/universal/faq/faq';
import { CompaniesMarquee } from '../../components/landing/companies-marquee/companies-marquee';

@Component({
  selector: 'app-contact-us',
  imports: [
    ContactInfo,
    Faq,
    CompaniesMarquee,
  ],
  templateUrl: './contact-us.html',
  styles: ``,
})
export class ContactUs {}
