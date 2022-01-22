import { createAction, props } from '@ngrx/store';

export const enter = createAction('[Countries Preview Page] Enter');

export const searchByName = createAction(
  '[Countries Preview Page] Search By Name',
  props<{ name: string }>()
);

export const searchByRegion = createAction(
  '[Countries Preview Page] Search By Region',
  props<{ region: string }>()
);
