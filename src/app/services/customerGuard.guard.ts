import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CustomerGuardService } from './customerGuard.service';
import { Router } from '@angular/router';
@Injectable()

export class CustomerGuardGuard implements CanActivate {
    constructor(private customerGuardService: CustomerGuardService, private router: Router){ }
  
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.customerGuardService.isAuth()) {
        return true;
     } else {
        this.router.navigate(['/home']);
        return false;
     }
  }
}