import {createAction, props} from '@ngrx/store'
import { Country } from 'src/app/shared/model/country.model';


export const setCountry = createAction('[Country] Set Country', props<{country: Country | undefined}>());
export const findCountry = createAction('[Country] Find Country', props<{fullName: string}>());

