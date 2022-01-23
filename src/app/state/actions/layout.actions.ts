import { createAction, props } from '@ngrx/store';

/**
 * - Dark Theme
 */
export const loadTheme = createAction('[Layout] Load Theme');

export const updateTheme = createAction(
  '[Layout] Update Theme',
  props<{ darkTheme: boolean }>()
);
