import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getLoading } from 'src/app/state/shared-state/shared.selector';
import { Theme } from '../../components/theme/theme.mode';
import { ThemeService } from '../../service/theme.service';


@Component({
  selector: 'lbk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  darkTheme: Theme = {
    name: 'Dark Mode',
    src: '/assets/icons/moon-outline-dark.png',
  };

  loading$ = this._store.pipe(select(getLoading));

  constructor( private readonly _store: Store<AppState>) { }
}
