import { createReducer, on } from '@ngrx/store';
import { setCountry } from './country.actions';
import { initialCountryState } from './country.state';

export const countryReducer = createReducer(
  initialCountryState,
  on(setCountry, (state, { country }) => {
    if (!country) return undefined;
    return { ...state, ...country };
  })
);
