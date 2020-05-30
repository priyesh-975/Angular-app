import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthenticationService {

  constructor() { }
 
  // authenticate(username,password)
  // {
  //    if(username==="user" && password==="pass")
  //    {
  //     sessionStorage.setItem('authenticateUser',username);
  //     return true;
  //    }
     
  //    else
  //    return false;
  // }
  isLogin()
  {
    let user1= sessionStorage.getItem('authenticateUser');
    return  !(user1==null);
  }
  logout()
  {
    sessionStorage.removeItem('authenticateUser');
  }
}
