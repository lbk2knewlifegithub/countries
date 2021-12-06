import { createAction, props } from "@ngrx/store";
import { FilterState } from "./filter.state";

export const setFilter = createAction('[Filter] Set Filter', props<{filter: FilterState}>());
export const setFilterRegion = createAction('[Filter] Set Filter Region', props<{region?: string}>());
export const setFilterName = createAction('[Filter] Set Filter Name', props<{name?: string}>());
