import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { CompanyCouponsMaxComponent } from './components/company-coupons-max/company-coupons-max.component';
import { CompanyCouponsCatComponent } from './components/company-coupons-cat/company-coupons-cat.component';
import { OneCompanyComponent } from './components/one-company/one-company.component';
import { CompanyComponent } from './components/company/company.component';
import { AllCouponsComponent } from './components/all-coupons/all-coupons.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomercouponsComponent } from './components/customercoupons/customercoupons.component';
import { LoginComponent } from './components/login/login.component';
import { CompanycouponsComponent } from './components/companycoupons/companycoupons.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { MainComponent } from './components/main/main.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneCustomerComponent } from './components/one-customer/one-customer.component';
import { CustomerCouponsCatComponent } from './components/customer-coupons-cat/customer-coupons-cat.component';
import { CustomerCouponsMaxComponent } from './components/customer-coupons-max/customer-coupons-max.component';
import { AdminGuardGuard } from './services/adminGuard.guard';
import { CompanyGuardGuard } from './services/companyGuard.guard';
import { CustomerGuardGuard } from './services/customerGuard.guard';


const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuardGuard] },
  { path: 'admin/company', component: CompanyListComponent, canActivate: [AdminGuardGuard] },
  { path: 'admin/customer', component: CustomerListComponent, canActivate: [AdminGuardGuard] },
  { path: 'admin/getOneCompany', component: OneCompanyComponent, canActivate: [AdminGuardGuard] },
  { path: 'admin/getOneCustomer', component: OneCustomerComponent, canActivate: [AdminGuardGuard] },
  { path: 'company', component: CompanyComponent, canActivate: [CompanyGuardGuard] },
  { path: 'company/get-company-coupons', component: CompanycouponsComponent, canActivate: [CompanyGuardGuard] },
  { path: 'company/get-company-coupons-category', component: CompanyCouponsCatComponent, canActivate: [CompanyGuardGuard] },
  { path: 'company/get-company-coupons-max-price', component: CompanyCouponsMaxComponent, canActivate: [CompanyGuardGuard] },
  { path: 'company/get-company-details', component: CompanyDetailsComponent, canActivate: [CompanyGuardGuard] },
  { path: 'customer', component: CustomerComponent, canActivate: [CustomerGuardGuard] },
  { path: 'customer/get-customer-coupons', component: CustomercouponsComponent, canActivate: [CustomerGuardGuard] },
  { path: 'customer/get-customer-coupons-category', component: CustomerCouponsCatComponent, canActivate: [CustomerGuardGuard] },
  { path: 'customer/get-customer-coupons-max-price', component: CustomerCouponsMaxComponent, canActivate: [CustomerGuardGuard] },
  { path: 'customer/get-all-coupons', component: AllCouponsComponent, canActivate: [CustomerGuardGuard] },
  { path: 'customer/get-customer-details', component: CustomerDetailsComponent, canActivate: [CustomerGuardGuard] },
  { path: ' ', component: MainComponent, pathMatch: 'full' },
  { path: '**', component: MainComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
