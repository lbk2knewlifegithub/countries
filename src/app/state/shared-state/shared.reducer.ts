import { Action, createReducer, on } from '@ngrx/store';
import { setLoading } from './shared.actions';
import { initialSharedState, SharedState } from './shared.state';

const _sharedReducer = createReducer(
  initialSharedState,
  on(setLoading, (state, { loading }) => ({ ...state, loading }))
);

export function sharedReducer(state: SharedState | undefined, action: Action) {
  return _sharedReducer(state, action);
}
