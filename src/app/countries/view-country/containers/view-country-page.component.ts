import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Country } from '@lbk/models';
import * as fromCountries from '@lbk/state/selectors/countries.selector';
import { Store } from '@ngrx/store';
import { zoomInOnEnterAnimation } from 'angular-animations';
import { Observable } from 'rxjs';
import * as fromViewCountryPage from '../reducers';

@Component({
  selector: 'lbk-view-country-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main
      @zoomInOnEnter
      *ngIf="country$ | async as country"
      class="container pb-32"
    >
      <lbk-back-button
        (click)="onBack()"
        class="inline-block mt-10 rounded-lg bg-elements"
      ></lbk-back-button>

      <lbk-country-details
        [loadingBorders]="(loadingBorders$ | async)!"
        [country]="country"
      ></lbk-country-details>
    </main>
  `,
  animations: [zoomInOnEnterAnimation()],
})
export class ViewCountryPageComponent implements OnInit {
  country$!: Observable<Country | undefined | null | ''>;
  loadingBorders$!: Observable<boolean>;

  constructor(
    private readonly _store: Store,
    private readonly _location: Location
  ) {}

  ngOnInit(): void {
    this.country$ = this._store.select(fromCountries.selectSelectedCountry);
    this.loadingBorders$ = this._store.select(
      fromViewCountryPage.selectLoadingBorders
    );
  }

  onBack(): void {
    this._location.back();
  }
}
