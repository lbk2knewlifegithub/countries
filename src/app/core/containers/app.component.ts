import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CAROUSEL_ROUTE_ANIMATION } from '@lbk/shared';
import { LayoutActions } from '@lbk/state/actions';
import * as fromLayout from '@lbk/state/selectors/layout.selector';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'lbk-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- header -->
    <lbk-header
      [darkTheme]="(darkTheme$ | async)!"
      (toggleTheme)="toggleTheme()"
    ></lbk-header>
    <!-- end header -->

    <!-- outlet -->
    <div [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>

    <!-- end outlet -->
    <lbk-footer></lbk-footer>
  `,
  animations: [CAROUSEL_ROUTE_ANIMATION],
})
export class AppComponent implements OnInit {
  darkTheme$!: Observable<boolean>;

  constructor(private readonly _store: Store) {}

  ngOnInit() {
    this.darkTheme$ = this._store.select(fromLayout.selectDarkTheme);

    this._store.dispatch(LayoutActions.loadTheme());
  }

  toggleTheme() {
    this.darkTheme$.pipe(take(1)).subscribe((darkTheme) => {
      this._store.dispatch(
        LayoutActions.updateTheme({ darkTheme: !darkTheme })
      );
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
