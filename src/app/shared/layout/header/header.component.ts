import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getFilter } from 'src/app/state/filter/filter.selector';
import { FilterState } from 'src/app/state/filter/filter.state';
import { getLoading } from 'src/app/state/shared-state/shared.selector';
import { changeTheme, loadTheme } from 'src/app/state/theme/theme.actions';
import { getDarkTheme } from 'src/app/state/theme/theme.selector';
import { Unsubscribe } from '../../components/unsubscribe.component';

@Component({
  selector: 'lbk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent extends Unsubscribe implements OnInit {
  loading$ = this._store.pipe(select(getLoading));
  filter!: FilterState;
  darkTheme!: boolean;

  constructor(private readonly _store: Store<AppState>) {
    super();
  }

  ngOnInit(): void {
    this._store.dispatch(loadTheme());

    this.appendSub = this._store
      .pipe(select(getFilter))
      .subscribe((filter) => (this.filter = filter));

    this.appendSub = this._store
      .pipe(select(getDarkTheme))
      .subscribe((darkTheme) => {
        this.darkTheme = darkTheme;
      });
  }

  toggleTheme():void{
    this._store.dispatch(changeTheme({darkTheme: !this.darkTheme}));
  }
}
