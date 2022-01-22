import { Country } from '@lbk/models';
import { createAction, props } from '@ngrx/store';

export const loadCountry = createAction(
  '[Country] Load Country',
  props<{ country: Country }>()
);
