import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantGuard implements CanActivate {
  
  constructor(private router:Router){}


  /**
   * Determines whether user is authorized to access page
   * @param next 
   * @param state 
   * @returns activate 
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('Participant Guard Run');
      if (!sessionStorage.getItem('isLoggedIn')){
        return this.router.parseUrl("/login");
      }
    return true;
  }
  
  
}
