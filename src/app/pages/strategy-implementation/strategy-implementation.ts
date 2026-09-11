import { Component } from '@angular/core';
import { Hero } from '../../components/strategy-implementation/hero/hero';
import { Roadmap } from '../../components/strategy-implementation/roadmap/roadmap';
import { DetailedRoadmap } from '../../components/strategy-implementation/detailed-roadmap/detailed-roadmap';

@Component({
  selector: 'app-strategy-implementation',
  imports: [Hero, Roadmap, DetailedRoadmap],
  templateUrl: './strategy-implementation.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class StrategyImplementation {}
