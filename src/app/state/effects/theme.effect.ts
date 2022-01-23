import { Injectable } from '@angular/core';
import { LayoutActions, ThemeAPIActions } from '@lbk/state/actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { ThemeService } from '../services';

@Injectable({ providedIn: 'root' })
export class ThemeEffects {
  loadTheme$ = createEffect(() =>
    this._actions$.pipe(
      ofType(LayoutActions.loadTheme),
      exhaustMap(() =>
        this._themeService.getTheme().pipe(
          map((darkTheme) => ThemeAPIActions.loadThemeSuccess({ darkTheme })),
          catchError((error) => of(ThemeAPIActions.loadThemFailure({ error })))
        )
      )
    )
  );

  updateTheme$ = createEffect(() =>
    this._actions$.pipe(
      ofType(LayoutActions.updateTheme),
      exhaustMap(({darkTheme}) =>
        this._themeService.updateTheme(darkTheme).pipe(
          map((darkTheme) => ThemeAPIActions.loadThemeSuccess({ darkTheme })),
          catchError((error) => of(ThemeAPIActions.loadThemFailure({ error })))
        )
      )
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _themeService: ThemeService
  ) {}
}
