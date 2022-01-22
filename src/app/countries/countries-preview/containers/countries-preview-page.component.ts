import { Component, OnInit } from '@angular/core';
import { Country } from '@lbk/models';
import { Unsubscribe } from '@lbk/shared';
import { CountriesPreviewPageActions } from '@lbk/state/actions';
import * as fromSearch from '@lbk/state/selectors/search.selector';
import { Store } from '@ngrx/store';
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation
} from 'angular-animations';
import { Observable, take } from 'rxjs';
import * as fromCountriesPreviewPage from '../reducers';

@Component({
  selector: 'lbk-countries-preview-page',
  templateUrl: './countries-preview-page.component.html',
  animations: [fadeInOnEnterAnimation(), fadeOutOnLeaveAnimation()],
})
export class CountriesPreviewPageComponent
  extends Unsubscribe
  implements OnInit
{
  countries$!: Observable<Country[]>;
  region$!: Observable<string>;
  name$!: Observable<string>;
  loading$!: Observable<boolean>;
  loaded$!: Observable<boolean>;

  constructor(private readonly _store: Store) {
    super();
  }

  ngOnInit(): void {
    this.countries$ = this._store.select(fromSearch.selectSearchResults);
    this.loading$ = this._store.select(fromCountriesPreviewPage.selectLoading);
    this.loaded$ = this._store.select(fromCountriesPreviewPage.selectLoaded);

    this.name$ = this._store.select(fromSearch.selectSearchName);
    this.region$ = this._store.select(fromSearch.selectSearchRegion);

    this.loaded$.pipe(take(1)).subscribe((loaded) => {
      if (loaded) return;
      this._store.dispatch(CountriesPreviewPageActions.enter());
    });
  }

  searchByName(name: string) {
    this._store.dispatch(CountriesPreviewPageActions.searchByName({ name }));
  }

  searchByRegion(region: string) {
    this._store.dispatch(
      CountriesPreviewPageActions.searchByRegion({ region })
    );
  }
}
