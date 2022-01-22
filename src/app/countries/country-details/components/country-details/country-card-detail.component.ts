import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '@lbk/models/country.model';

@Component({
  selector: 'lbk-country-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './country-details.component.html',
})
export class CountryDetailsComponent {
  @Input() country!: Country;

  get borders() {
    return this.country?.borders;
  }
}
