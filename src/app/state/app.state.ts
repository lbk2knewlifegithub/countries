import { Country } from "../shared/model/country.model";
import { countriesReducer } from "./countries/countries.reduder";

export interface AppState {
  countries: Country[];
}

export const appReducer = {
  countries: countriesReducer
}
