import { createAction, props } from '@ngrx/store';
import { ThemeState } from './theme.state';

export const setTheme = createAction('[Theme] Set Theme', props<ThemeState>());
export const changeTheme = createAction(
  '[Theme] Change Theme',
  props<ThemeState>()
);
export const setToLightTheme = createAction('[Theme] Set To Light Theme');
export const loadTheme = createAction('[Theme] Load Theme');
