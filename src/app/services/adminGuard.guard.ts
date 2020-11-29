import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AdminGuardService } from './adminGuard.service';
import { Router } from '@angular/router';
@Injectable()

export class AdminGuardGuard implements CanActivate {
    constructor(private adminGuardService: AdminGuardService, private router: Router){ }
  
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.adminGuardService.isAuth()) {
        return true;
     } else {
        this.router.navigate(['/home']);
        return false;
     }
  }
}