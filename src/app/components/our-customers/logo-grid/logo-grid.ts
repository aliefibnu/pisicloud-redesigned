import { Component, computed, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapSearch,
  bootstrapBuildings,
  bootstrapArrowClockwise,
  bootstrapXCircleFill,
} from '@ng-icons/bootstrap-icons';
import { COMPANY_LOGOS, type CompanyLogo } from '../../../data/companies';

@Component({
  selector: 'customers-logo-grid',
  imports: [NgOptimizedImage, TranslatePipe, MatButtonModule, NgIcon],
  viewProviders: [
    provideIcons({
      bootstrapSearch,
      bootstrapBuildings,
      bootstrapArrowClockwise,
      bootstrapXCircleFill,
    }),
  ],
  templateUrl: './logo-grid.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class CustomersLogoGrid {
  readonly allLogos: readonly CompanyLogo[] = COMPANY_LOGOS;
  readonly searchQuery = signal<string>('');

  readonly totalCount = computed(() => this.allLogos.length);

  readonly filteredLogos = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    if (!query) {
      return this.allLogos;
    }

    return this.allLogos.filter((logo) => {
      const nameMatch = logo.name?.toLowerCase().includes(query) ?? false;
      const altMatch = logo.alt.toLowerCase().includes(query);
      return nameMatch || altMatch;
    });
  });

  readonly filteredCount = computed(() => this.filteredLogos().length);

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.searchQuery.set(target?.value ?? '');
  }

  clearSearch(): void {
    this.searchQuery.set('');
  }
}
