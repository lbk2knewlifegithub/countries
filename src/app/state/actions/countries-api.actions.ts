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

/**
 *  - find country success-
 */
export const findBordersSuccess = createAction(
  '[Countries/API] Find Borders Success',
  props<{ name: string, borders: string[] }>()
);

export const findBordersFailure = createAction(
  '[Countries/API] Find Borders Failure',
  props<{ error: any }>()
);
