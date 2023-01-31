import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserinterceptorsService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("este es el interceptor");
    req = req.clone(
      {
        setHeaders:{'authorization':'Token de Autorizacion'}
      }
    );
    return next.handle(req);
  }
}
