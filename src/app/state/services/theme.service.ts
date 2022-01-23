import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE_TOKEN } from '@lbk/tokens';
import { map, Observable, of, tap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  static THEME_KEY = 'theme';

  constructor(
    @Inject(LOCAL_STORAGE_TOKEN)
    private readonly _storage: Storage
  ) {}

  supported(): Observable<boolean> {
    return this._storage !== null
      ? of(true)
      : throwError(() => 'Local Storage Not Supported');
  }

  getTheme(): Observable<boolean> {
    return this.supported().pipe(
      map((_) => this._storage.getItem(ThemeService.THEME_KEY)),
      map((value: string | null) => (value ? JSON.parse(value) : false)),
      tap((darkTheme) => this.saveTheme(darkTheme)),
      tap((darkTheme) => this.applyTheme(darkTheme))
    );
  }

  updateTheme(darkTheme: boolean): Observable<boolean> {
    return this.supported().pipe(
      tap((_) => this.saveTheme(darkTheme)),
      tap((_) => this.applyTheme(darkTheme)),
      map((_) => darkTheme)
    );
  }

  applyTheme(darkTheme: boolean) {
    if (darkTheme) return document.body.classList.add('dark');
    return document.body.classList.remove('dark');
  }

  saveTheme(darkTheme: boolean): void {
    this._storage.setItem(ThemeService.THEME_KEY, JSON.stringify(darkTheme));
  }
}
