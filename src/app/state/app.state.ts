import { Country } from '../shared/model/country.model';
import { countriesReducer } from './countries/countries.reduder';
import { COUNTRIES_STATE_NAME } from './countries/countries.selector';
import { sharedReducer } from './shared-state/shared.reducer';
import { SHARED_STATE_NAME } from './shared-state/shared.selector';
import { SharedState } from './shared-state/shared.state';

export interface AppState {
  countries: Country[];
  sharedState: SharedState;
}

export const appReducer = {
  [COUNTRIES_STATE_NAME]: countriesReducer,
  [SHARED_STATE_NAME]: sharedReducer,
};
