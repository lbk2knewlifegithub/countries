import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, finalize, Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { setLoading } from 'src/app/state/shared-state/shared.actions';

@Injectable({ providedIn: 'root' })
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private readonly _store: Store<AppState>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._store.dispatch(setLoading({ loading: true }));
    return next.handle(req).pipe(
      finalize(() => {
        this._store.dispatch(setLoading({ loading: false }));
      }),
      catchError((error) => {
        this._store.dispatch(setLoading({ loading: false }));
        console.log(error);
        return EMPTY;
      })
    );
  }
}
