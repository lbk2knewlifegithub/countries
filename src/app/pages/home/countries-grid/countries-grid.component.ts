import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Country } from '../../../shared/model/country.model';

@Component({
  selector: 'lbk-countries-grid',
  templateUrl: './countries-grid.component.html',
  styleUrls: ['./countries-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesGridComponent {
  @Input() countries!: Country[];
  @Output() countryChange = new EventEmitter<Country>();

  countryIdentify(index: number, country: Country) {
    return country.name;
  }
}
