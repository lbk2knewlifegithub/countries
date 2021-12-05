import { Component, Input } from '@angular/core';
import { Country } from 'src/app/shared/model/country.model';

@Component({
  selector: 'lbk-country-card-detail',
  templateUrl: './country-card-detail.component.html',
  styleUrls: ['./country-card-detail.component.scss'],
})
export class CountryCardDetailComponent {
    @Input() country!: Country;
}

