import { createReducer, on } from '@ngrx/store';
import { setCountries } from './countries.actions';
import { initialState } from './countries.state';

export const countriesReducer = createReducer(
  initialState,
  on(setCountries, (state, {countries}) => [...state, ...countries])
);
