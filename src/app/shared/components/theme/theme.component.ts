import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { changeTheme } from 'src/app/state/theme/theme.actions';
import { getDarkTheme } from 'src/app/state/theme/theme.selector';
import { Unsubscribe } from '../unsubscribe.component';

@Component({
  selector: 'lbk-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent extends Unsubscribe implements OnInit {
  @Input() darkTheme!: boolean;
  get name(): string {
    return this.darkTheme ? 'Dark Mode' : 'Light Mode';
  }

  constructor(private readonly _store: Store<AppState>) {
    super();
  }
  ngOnInit(): void {
    this._store
      .select(getDarkTheme)
      .subscribe((isDarkTheme) => (this.darkTheme = isDarkTheme));
  }

  onThemeToggle() {
    this._store.dispatch(changeTheme({ darkTheme: !this.darkTheme }));
  }
}
