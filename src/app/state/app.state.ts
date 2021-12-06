import { Country } from '../shared/model/country.model';
import { countriesReducer } from './countries/countries.reducer';
import { COUNTRIES_STATE_NAME } from './countries/countries.selector';
import { sharedReducer } from './shared-state/shared.reducer';
import { SHARED_STATE_NAME } from './shared-state/shared.selector';
import { SharedState } from './shared-state/shared.state';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { COUNTRY_STATE_NAME } from './country/country.selector';
import { countryReducer } from './country/country.reducer';
import { FILTER_STATE_NAME } from './filter/filter.selector';
import { filterReducer } from './filter/filter.reducer';

export interface AppState {
  countries: Country[];
  sharedState: SharedState;
  country: Country;
  router:RouterReducerState ;
}

export const appReducer = {
  [COUNTRIES_STATE_NAME]: countriesReducer,
  [COUNTRY_STATE_NAME]: countryReducer,
  [SHARED_STATE_NAME]: sharedReducer,
  [FILTER_STATE_NAME]: filterReducer,
  router: routerReducer
};
