import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Unsubscribe } from 'src/app/shared/components/unsubscribe.component';
import { AppState } from 'src/app/state/app.state';
import { findCountry, setCountry } from 'src/app/state/country/country.actions';
import { getCountry } from 'src/app/state/country/country.selector';
import { getFilter } from 'src/app/state/filter/filter.selector';
import { FilterState } from 'src/app/state/filter/filter.state';
import { loading } from 'src/app/state/shared-state/shared.actions';
import { getLoading } from 'src/app/state/shared-state/shared.selector';

@Component({
  selector: 'lbk-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent extends Unsubscribe implements OnInit {
  country$ = this._store.select(getCountry);
  loading$ = this._store.pipe(select(getLoading));
  filter!: FilterState;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _store: Store<AppState>,
    private readonly _location: Location
  ) {
    super();
    this._store.select(getFilter).subscribe((filter) => {
      this.filter = filter;
    });
  }

  ngOnInit(): void {
    this.appendSub = this._route.params.subscribe((params) => {
      const fullName = params?.['fullName'];
      if (!fullName)
        return this._store.dispatch(setCountry({ country: undefined }));
      this._store.dispatch(loading());
      this._store.dispatch(findCountry({ fullName }));
    });
  }

  onBack() :void{
      this._location.back();
  }
}
