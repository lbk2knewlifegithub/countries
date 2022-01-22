import { InjectionToken } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromCountries from './countries.reducer';
import * as fromLayout from './layout.reducer';
import * as fromSearch from './search.reducer';

export interface State {
  [fromLayout.layoutFeatureKey]: fromLayout.State;
  [fromCountries.countriesFeatureKey]: fromCountries.State;
  [fromSearch.searchFeatureKey]: fromSearch.State;
  router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    [fromLayout.layoutFeatureKey]: fromLayout.reducer,
    [fromCountries.countriesFeatureKey]: fromCountries.reducer,
    [fromSearch.searchFeatureKey]: fromSearch.reducer,
    router: fromRouter.routerReducer,
  }),
});

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];
