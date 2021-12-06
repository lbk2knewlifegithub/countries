import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Country } from "src/app/shared/model/country.model";

export const COUNTRY_STATE_NAME = "country";


const getCountryState = createFeatureSelector<Country | undefined>(COUNTRY_STATE_NAME);

export const getCountry = createSelector(getCountryState, (state: Country | undefined) => state);
