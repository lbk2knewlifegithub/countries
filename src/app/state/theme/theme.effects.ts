import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { finalize, map, mergeMap, of } from 'rxjs';
import { ThemeService } from 'src/app/shared/service/theme.service';
import { changeTheme, loadTheme, setTheme } from './theme.actions';

@Injectable({ providedIn: 'root' })
export class ThemeEffects {
  changeTheme$ = createEffect(() =>
    this._actions$.pipe(
      ofType(changeTheme),
      mergeMap(({ darkTheme }) =>
        of(setTheme({ darkTheme })).pipe(
          finalize(() => {
             this._themeService.backup({ darkTheme });
             this._themeService.setTheme({ darkTheme });
          })
        )
      )
    )
  );

  loadTheme$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadTheme),
      mergeMap(() => {
        return of(this._themeService.loadTheme()).pipe(
          map((theme) => setTheme({ darkTheme: theme ? theme.darkTheme : false }))
        );
      })
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _themeService: ThemeService
  ) {}
}
