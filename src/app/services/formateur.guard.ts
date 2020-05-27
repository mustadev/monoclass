import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateurGuard implements CanActivate {
  constructor(private router:Router){}


  /**
   * Determines whether user is Formateur
   * @param next 
   * @param state 
   * @returns activate 
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('Formateur Guard Run');
      if (!sessionStorage.getItem("formateur")){
        return this.router.parseUrl("/formateur/login");
      }
    return true;
  }
  
}
