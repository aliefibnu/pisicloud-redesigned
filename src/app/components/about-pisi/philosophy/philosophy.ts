import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

export interface PhilosophyItem {
  id: string;
  nameKey: string;
  descKey: string;
  bgClass: string;
  iconClass: string;
}

@Component({
  selector: 'about-pisi-philosophy, app-philosophy',
  imports: [TranslatePipe],
  templateUrl: './philosophy.html',
  styleUrl: './philosophy.css',
})
export class Philosophy {
  readonly items: PhilosophyItem[] = [
    {
      id: 'integrity',
      nameKey: 'ABOUT_PISI.PHILOSOPHY.VALUES.INTEGRITY.NAME',
      descKey: 'ABOUT_PISI.PHILOSOPHY.VALUES.INTEGRITY.DESC',
      bgClass: 'bg-[#d7f0e6]',
      iconClass: 'text-[#076657]',
    },
    {
      id: 'innovation',
      nameKey: 'ABOUT_PISI.PHILOSOPHY.VALUES.INNOVATION.NAME',
      descKey: 'ABOUT_PISI.PHILOSOPHY.VALUES.INNOVATION.DESC',
      bgClass: 'bg-[#fff2cf]',
      iconClass: 'text-[#ab7500]',
    },
    {
      id: 'teamwork',
      nameKey: 'ABOUT_PISI.PHILOSOPHY.VALUES.TEAMWORK.NAME',
      descKey: 'ABOUT_PISI.PHILOSOPHY.VALUES.TEAMWORK.DESC',
      bgClass: 'bg-[#daf1f8]',
      iconClass: 'text-[#0a7894]',
    },
    {
      id: 'communication',
      nameKey: 'ABOUT_PISI.PHILOSOPHY.VALUES.COMMUNICATION.NAME',
      descKey: 'ABOUT_PISI.PHILOSOPHY.VALUES.COMMUNICATION.DESC',
      bgClass: 'bg-[#d4f2ea]',
      iconClass: 'text-[#0a8068]',
    },
    {
      id: 'commitment',
      nameKey: 'ABOUT_PISI.PHILOSOPHY.VALUES.COMMITMENT.NAME',
      descKey: 'ABOUT_PISI.PHILOSOPHY.VALUES.COMMITMENT.DESC',
      bgClass: 'bg-[#d2efe4]',
      iconClass: 'text-[#055c4d]',
    },
  ];
}

export { Philosophy as PhilosophyComponent };

