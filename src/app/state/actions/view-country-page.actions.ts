import { createAction, props } from '@ngrx/store';

export const selectCountry = createAction(
  '[View Country Page] Select Country',
  props<{ name: string }>()
);
