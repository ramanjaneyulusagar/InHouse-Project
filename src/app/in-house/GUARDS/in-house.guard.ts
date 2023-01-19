import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { InhouseService } from '../../app.service';
import { InHouseService } from '../SERVICES/in-house.service';

@Injectable({
  providedIn: 'root',
})
export class InHouseGuard implements CanActivate {
  constructor(private router: Router, private service: InHouseService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.service.loggedIn()) {
      // this.router.navigate(['applicant-search'])
      return true;
    } else {
      if (! this.service.loggedIn()) {
        // Navigate the user to the login page
        this.router.navigate(['']);
        return false;
      } else {

        this.router.navigate([''])
         return true;
      }

      // this.router.navigate(['/']);
      // return false;
    }
  }
}
function elseIf(arg0: boolean) {
  throw new Error('Function not implemented.');
}
