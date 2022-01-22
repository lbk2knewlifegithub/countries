import { BackButtonComponent } from './back-button.component';
import * as fromCountryDetails from './country-details';
import { CountryNotExistedComponent } from './country-not-existed.component';

export const COMPONENTS = [
  BackButtonComponent,
  CountryNotExistedComponent,
  fromCountryDetails.BorderComponent,
  fromCountryDetails.CountryDetailsComponent,
];
