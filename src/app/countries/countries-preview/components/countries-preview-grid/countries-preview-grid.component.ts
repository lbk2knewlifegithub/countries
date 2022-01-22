import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '@lbk/models';

@Component({
  selector: 'lbk-countries-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngFor="let country of countries; trackBy: identifyCountry">
      <lbk-country-preview
        [routerLink]="['/details', country.name]"
        class="block cursor-pointer"
        [country]="country"
      ></lbk-country-preview>
    </ng-container>
  `,
  styles: [
    `
      :host {
        @apply grid gap-10 mt-10 place-content-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
      }
    `,
  ],
})
export class CountriesGridComponent {
  @Input() countries!: Country[];

  identifyCountry(index: number, country: Country) {
    return country.name;
  }
}
