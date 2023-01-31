import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DishesInterceptorService {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');
    if (token) {
      // const token: string =
      //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3Rpbm9AbWFpbC5jb20iLCJpZCI6IjYzZDJmMTQ5Y2U4NTZhNTZmZjFmMTJlMCIsImlhdCI6MTY3NTAyNjAzNSwiZXhwIjoxNjc1MTEyNDM1fQ.eX83KC_J4X2HqfhgJdEiKGmDexICDmcNqDdicfA43_g';
      const request = req.clone({
        headers: req.headers.set('Authorization', `${token}`),
      });
      return next.handle(request);
    }
    return next.handle(req);
  }
}
