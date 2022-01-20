import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../Service/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authguard:ServiceService){}
  canActivate() {
    if(this.authguard.dash()){
      window.alert("now you can navigate to DashBoard");
      return true;

    }else{
      window.alert("first complete  Registration and login")
      return false
    }
  }
  
}
