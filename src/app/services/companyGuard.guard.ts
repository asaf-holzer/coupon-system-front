import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CompanyGuardService } from './companyGuard.service';
import { Router } from '@angular/router';
@Injectable()


export class CompanyGuardGuard implements CanActivate {
    constructor(private companyGuardService: CompanyGuardService, private router: Router){ }
  
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.companyGuardService.isAuth()) {
        return true;
     } else {
        this.router.navigate(['/home']);
        return false;
     }
  }
}