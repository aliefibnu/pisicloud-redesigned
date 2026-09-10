import { Component } from '@angular/core';
import { Hero } from '../../components/customize-module/hero/hero';
import { Benefits } from '../../components/customize-module/benefits/benefits';
import { Process } from '../../components/customize-module/process/process';
import { Faq } from '../../components/universal/faq/faq';
import { CompaniesMarquee } from '../../components/landing/companies-marquee/companies-marquee';

@Component({
  selector: 'app-customize-module',
  imports: [
    Hero,
    Benefits,
    Process,
    Faq,
    CompaniesMarquee,
  ],
  templateUrl: './customize-module.html',
  styles: ``,
})
export class CustomizeModule {}

export { CustomizeModule as CustomizeModuleComponent };
