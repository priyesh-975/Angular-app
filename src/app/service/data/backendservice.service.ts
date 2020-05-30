import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

export class Message{
  constructor(public message:String)
  {
  }
}


@Injectable({
  providedIn: 'root'
})

export class BackendserviceService
 {

  

  private _url:string='http://localhost:8080/hello-pathvariable/priyesh1';

  constructor(private http:HttpClient) { }

   
  excuteHellowBean():Observable<Message>
  {
   let  basicauthenticationString:string=this.creatBasicAuthentication();

    let headers=new HttpHeaders({Authorization:basicauthenticationString});


 return this.http.get<Message>(this._url,{headers});
  }
  
 
  excuteHellowBeanwithparameter(name)
  {
   // let  basicauthenticationString:string=this.creatBasicAuthentication();
   // let headers=new HttpHeaders({Authorization:basicauthenticationString});
    return this.http.get<Message>(`http://localhost:8080/hello-pathvariable/${name}`
    //,{headers}
    );
  }

  creatBasicAuthentication(){

    let usernaem:string='user';
    let pass:string='pass';
    let auth='Basic '+window.btoa(usernaem +':'+pass)
    console.log(auth);
    return auth;

  }
    
}

