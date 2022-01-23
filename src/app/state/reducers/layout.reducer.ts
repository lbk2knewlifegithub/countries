import { createReducer, on } from '@ngrx/store';
import { ThemeAPIActions } from '../actions';

export const layoutFeatureKey = 'layout';

export interface State {
  darkTheme: boolean;
  error: string;
}

export const initialState: State = {
  darkTheme: false,
  error: '',
};

export const reducer = createReducer(
  initialState,
  on(ThemeAPIActions.loadThemeSuccess, (state, { darkTheme }) => ({
    darkTheme,
    error: '',
  })),
  on(ThemeAPIActions.loadThemFailure, (state, { error }) => ({
    darkTheme: true,
    error,
  }))
);

export const getDarkTheme = (state: State) => state.darkTheme;
export const getError = (state: State) => state.error;
