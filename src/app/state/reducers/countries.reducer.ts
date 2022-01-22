import { Country } from '@lbk/models';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CountriesApiAction } from '../actions';

export const countriesFeatureKey = 'countries';

export interface State extends EntityState<Country> {
  selectedInvoiceId: number | null;
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
  on(CountriesApiAction.loadCountriesSuccess, (state, { countries }) =>
    adapter.addMany(countries, state)
  )
  // on(ViewInvoicePageActions.selectInvoice, (state, { id }) => ({
  //   ...state,
  //   selectedInvoiceId: id,
  // }))
);

export const selectId = (state: State) => state.selectedInvoiceId;
