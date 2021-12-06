import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ThemeState } from './theme.state';

export const THEME_STATE_NAME = 'theme';
const getThemeState = createFeatureSelector<ThemeState>(THEME_STATE_NAME);
export const getDarkTheme = createSelector(
  getThemeState,
  (state: ThemeState) => state.darkTheme
);
