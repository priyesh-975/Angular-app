import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpClient, HttpHeaders } from '@angular/common/http';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
export class AuthenticationBean {
  constructor(public message: String) {
  }
}
@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService {
  constructor(private http: HttpClient) { }

  excuteAuthenticationService(username, password) {
    let auth = 'Basic ' + window.btoa(username + ':' + password)
    //let headers=new HttpHeaders({'Authorization':auth});
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', auth);

    return this.http.get<AuthenticationBean>(`http://localhost:8080/authbean`, { headers: headers });

  }
  

  excuteAuthenticationJWTService(username, password) {
    return this.http.post(`http://localhost:8080/authenticate`,{
      username,
      password
    });
  }
    excuteAuthenticationJWTServiceRefresh(username, password) {
      return this.http.post(`http://localhost:8080/refresh`,{
        username,
        password
      });

  }
  getAuthenticateUser() {
    return sessionStorage.getItem('authenticateUser');
  }
  getAuthenticatedtoken() {
      return sessionStorage.getItem('token')
    }
  

  isLogin() {
    let user1 = sessionStorage.getItem('authenticateUser');
    return !(user1 == null);
  }
  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('authenticateUser');
    
  }






}
