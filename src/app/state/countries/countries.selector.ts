import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Country } from "src/app/shared/model/country.model";

export const COUNTRIES_STATE_NAME = "countries";


const getCountriesState = createFeatureSelector<Country[]>(COUNTRIES_STATE_NAME);

export const getCountries = createSelector(getCountriesState, (state: Country[]) => state);
