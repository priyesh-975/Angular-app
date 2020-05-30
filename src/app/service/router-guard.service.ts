import { Injectable } from '@angular/core';
import { HardcodedauthenticationService } from './hardcodedauthentication.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate{

  constructor(private hardcodedauthenticatedservie:HardcodedauthenticationService,
              private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.hardcodedauthenticatedservie.isLogin())
    return true;
    else
    {
    this.router.navigate['/login'];
    return false;
    }
  }

}
