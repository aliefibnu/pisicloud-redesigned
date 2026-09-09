import { Component, computed } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerHeartHandshake, tablerCpu } from '@ng-icons/tabler-icons';
import { bootstrapPatchCheckFill, bootstrapLightbulbFill } from '@ng-icons/bootstrap-icons';

export interface MissionCard {
  id: number;
  titleKey: string;
  descKey: string;
  icon: string;
  isWide: boolean;
}

@Component({
  selector: 'about-pisi-vision-mission, app-vision-mission',
  imports: [TranslatePipe, NgIcon],
  viewProviders: [
    provideIcons({
      tablerHeartHandshake,
      tablerCpu,
      bootstrapPatchCheckFill,
      bootstrapLightbulbFill,
    }),
  ],
  templateUrl: './vision-mission.html',
  styleUrl: './vision-mission.css',
})
export class VisionMission {
  readonly missionCards: MissionCard[] = [
    {
      id: 1,
      titleKey: 'ABOUT_PISI.VISION_MISSION.MISSION.CARD_1.TITLE',
      descKey: 'ABOUT_PISI.VISION_MISSION.MISSION.CARD_1.DESC',
      icon: 'tablerHeartHandshake',
      isWide: true,
    },
    {
      id: 2,
      titleKey: 'ABOUT_PISI.VISION_MISSION.MISSION.CARD_2.TITLE',
      descKey: 'ABOUT_PISI.VISION_MISSION.MISSION.CARD_2.DESC',
      icon: 'tablerCpu',
      isWide: false,
    },
    {
      id: 3,
      titleKey: 'ABOUT_PISI.VISION_MISSION.MISSION.CARD_3.TITLE',
      descKey: 'ABOUT_PISI.VISION_MISSION.MISSION.CARD_3.DESC',
      icon: 'bootstrapPatchCheckFill',
      isWide: false,
    },
    {
      id: 4,
      titleKey: 'ABOUT_PISI.VISION_MISSION.MISSION.CARD_4.TITLE',
      descKey: 'ABOUT_PISI.VISION_MISSION.MISSION.CARD_4.DESC',
      icon: 'bootstrapLightbulbFill',
      isWide: true,
    },
  ];

  readonly row1 = computed(() => this.missionCards.slice(0, 2));
  readonly row2 = computed(() => this.missionCards.slice(2, 4));
}

export { VisionMission as VisionMissionComponent };


