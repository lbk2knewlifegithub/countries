import { Country } from '@lbk/models';
import { createAction, props } from '@ngrx/store';

/**
 * - Load Countries
 */
export const loadCountriesSuccess = createAction(
  '[Countries/API] Load Countries Success',
  props<{ countries: Country[] }>()
);

export const loadCountriesFailure = createAction(
  '[Countries/API] Load Countries Failure',
  props<{ error: any }>()
);
