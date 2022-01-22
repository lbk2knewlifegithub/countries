import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Country } from '@lbk/models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'lbk-country-details-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="container pb-32">
      <lbk-back-button
        class="inline-block mt-10 rounded-lg bg-elements"
      ></lbk-back-button>

      <lbk-country-details
        [country]="(country$ | async)!"
      ></lbk-country-details>
    </main>

    <div *ngIf="(loading$ | async)!" class="grid mt-20 place-content-center">
      <lbk-circle-loading-large></lbk-circle-loading-large>
    </div>
  `,
})
export class CountryDetailsPageComponent implements OnInit {
  country$!: Observable<Country>;
  loading$!: Observable<boolean>;

  constructor(
    private readonly _store: Store,
    private readonly _location: Location
  ) {}

  ngOnInit(): void {}

  onBack(): void {
    this._location.back();
  }
}
