import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor {

  constructor(private basicauth:BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username:string='user';
    // let pass:string='pass';
    let auth=this.basicauth.getAuthenticatedtoken();

    //let username=this.basicauth.getAuthenticateUser();

   // let auth='Basic '+window.btoa(username +':'+pass);
   if(auth)
   {
    request=request.clone({
      setHeaders:{Authorization:auth}
    })
  }
    return next.handle(request);
  
  }
  
}
