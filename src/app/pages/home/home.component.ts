import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Unsubscribe } from 'src/app/shared/components/unsubscribe.component';
import { AppState } from 'src/app/state/app.state';
import { getCountries } from 'src/app/state/countries/countries.selector';
import { setFilter } from 'src/app/state/filter/filter.actions';
import {
  getFilter,
  getFilterRegion
} from 'src/app/state/filter/filter.selector';
import { FilterState } from 'src/app/state/filter/filter.state';
import { loading } from 'src/app/state/shared-state/shared.actions';
import { getLoading } from 'src/app/state/shared-state/shared.selector';

@Component({
  selector: 'lbk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends Unsubscribe implements OnInit, OnDestroy {
  countries$ = this._store.select(getCountries);
  region$ = this._store.select(getFilterRegion);
  filter!: FilterState;
  loading!: boolean;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _store: Store<AppState>
  ) {
    super();
  }

  ngOnInit(): void {
    this._subscribeParams();
    this._subscribeFilter();
    this._subscribeLoading();
  }

  private _subscribeFilter() {
    this.appendSub = this._store.select(getFilter).subscribe((filter) => {
      this.filter = filter;
    });
  }
  private _subscribeLoading() {
    this.appendSub = this._store.select(getLoading).subscribe((loading) => {
      this.loading = loading;
    });
  }

  private _subscribeParams() {
    this.appendSub = this._route.queryParams.subscribe(async (params) => {
      this._store.dispatch(loading());
      this._store.dispatch(setFilter({ filter: { ...params } }));
    });
  }
}
