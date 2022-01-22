import { Country } from '@lbk/models';
import { ViewCountryPageActions } from '@lbk/state/actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CountriesApiAction, CountryActions } from '../actions';

export const countriesFeatureKey = 'countries';

export interface State extends EntityState<Country> {
  selectedInvoiceId: string | null;
}

export const adapter: EntityAdapter<Country> = createEntityAdapter<Country>({
  selectId: (invoice: Country) => invoice.name,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  selectedInvoiceId: null,
});

export const reducer = createReducer(
  initialState,
  on(CountryActions.loadCountry, (state, { country }) =>
    adapter.addOne(country, state)
  ),
  on(CountriesApiAction.findBordersSuccess, (state, { name, borders }) =>
    adapter.updateOne({ id: name, changes: { borders } }, state)
  ),
  on(CountriesApiAction.loadCountriesSuccess, (state, { countries }) =>
    adapter.addMany(countries, state)
  ),
  on(ViewCountryPageActions.selectCountry, (state, { name }) => ({
    ...state,
    selectedInvoiceId: name,
  }))
);

export const selectId = (state: State) => state.selectedInvoiceId;
