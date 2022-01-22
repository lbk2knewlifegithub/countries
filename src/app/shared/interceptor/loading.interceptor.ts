import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req);
    // return next.handle(req).pipe(
    //   finalize(() => {
    //     this._store.dispatch(setLoading({ loading: false }));
    //   }),
    //   catchError((error) => {
    //     this._store.dispatch(setLoading({ loading: false }));
    //     console.log(error);
    //     return EMPTY;
    //   })
    // );
  }
}
