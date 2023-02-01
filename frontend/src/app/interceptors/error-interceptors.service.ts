import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorsService {

  constructor(
    private toastr: ToastrService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      console.log('flhklsahf', err)
        alert(err.error.errors[0])
        const error = err.error?.message || err.statusText;
        this.toastr.error(error);
        console.error(err);
        return throwError(() => error);
    }))
}
}
