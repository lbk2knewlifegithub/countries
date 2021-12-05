import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Unsubscribe } from 'src/app/shared/components/unsubscribe.component';
import { CountryFilter } from 'src/app/shared/model/country-filter.model';
import { LoadingService } from 'src/app/shared/service/loading.service';
import { AppState } from 'src/app/state/app.state';
import { loadCountries } from 'src/app/state/countries/countries.actions';
import { getCountries } from 'src/app/state/countries/countries.selector';
import { Country } from '../../shared/model/country.model';

@Component({
  selector: 'lbk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends Unsubscribe implements OnInit, OnDestroy {
  countries$!: Observable<Country[]>;

  constructor(
    private readonly _route: ActivatedRoute,
    public loadingService: LoadingService,
    private readonly _store: Store<AppState>
  ) {
    super();
  }

  ngOnInit(): void {
    this.countries$ = this._store.select(getCountries);
    this._subscribeParams();
  }

  private _subscribeParams() {
    this.appendSub = this._route.queryParams.subscribe(async (params) => {
      const filter: CountryFilter = { ...params, page: 1 };
      this._store.dispatch(loadCountries(filter));
    });

    // this.paginator = {
    //   length: Math.ceil(totalResult / 20),
    //   pageSize,
    //   previousPageIndex: 0,
    //   pageIndex: page + 1,
    //   pageSizeOptions: [5, 10, 20],
    // };
    // });
  }
}
