import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Unsubscribe } from 'src/app/shared/components/unsubscribe.component';
import { AppState } from 'src/app/state/app.state';
import { findCountry, setCountry } from 'src/app/state/country/country.actions';
import { getCountry } from 'src/app/state/country/country.selector';
import { getLoading } from 'src/app/state/shared-state/shared.selector';

@Component({
  selector: 'lbk-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent extends Unsubscribe implements OnInit {
  country$ = this._store.select(getCountry);
  loading$ = this._store.select(getLoading);

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _store: Store<AppState>
  ) {
    super();
  }

  ngOnInit(): void {
    this.appendSub = this._route.params.subscribe((params) => {
      const fullName = params?.['fullName'];
      if (!fullName)
        return this._store.dispatch(setCountry({ country: undefined }));

      this._store.dispatch(findCountry({ fullName }));
    });
  }
}
