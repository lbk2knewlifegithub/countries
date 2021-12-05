import {createAction, props} from '@ngrx/store'
import { CountryFilter } from 'src/app/shared/model/country-filter.model';
import { Country } from 'src/app/shared/model/country.model';


export const loadCountries = createAction('[Countries] Load Countries', props<CountryFilter>());
export const setCountries = createAction('[Countries] Set Countries', props<{ countries: Country[] }>());

