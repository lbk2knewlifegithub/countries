import { Component, Input } from '@angular/core';
import { Country } from '../../../../shared/model/country.model';
import { ThemeService } from '../../../../shared/service/theme.service';

@Component({
  selector: 'lbk-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent {
  @Input() country!: Country;

  constructor(readonly themeService: ThemeService) {}
}
