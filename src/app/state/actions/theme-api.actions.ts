import { createAction, props } from '@ngrx/store';

export const loadThemeSuccess = createAction(
  '[Theme/API] Load Theme Success',
  props<{ darkTheme: boolean }>()
);

export const loadThemFailure = createAction(
  '[Theme/API] Load Theme Failure',
  props<{ error: string }>()
);
