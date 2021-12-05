import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../service/loading.service';

@Injectable({ providedIn: 'root' })
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private readonly _loadingService: LoadingService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loadingService.isLoading.next(true);

    return next.handle(req).pipe(
      finalize(() => {
        this._loadingService.isLoading.next(false);
      })
    );
  }
}
