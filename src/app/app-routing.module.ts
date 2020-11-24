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

const routes: Routes = [
  { path: 'home', component:MainComponent},
  { path: 'login', component:LoginComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'admin/company', component: CompanyListComponent},
  { path: 'admin/customer', component: CustomerListComponent},
  { path: 'admin/getOneCompany', component:OneCompanyComponent},
  { path: 'admin/getOneCustomer', component:OneCustomerComponent},
  { path: 'company', component:CompanyComponent},
  { path: 'company/get-company-coupons', component: CompanycouponsComponent},
  { path: 'company/get-company-coupons-category', component: CompanyCouponsCatComponent},
  { path: 'company/get-company-coupons-max-price', component: CompanyCouponsMaxComponent},
  { path: 'company/get-company-details', component: CompanyDetailsComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'customer/get-customer-coupons', component:CustomercouponsComponent},
  { path: 'customer/get-customer-coupons-category', component:CustomerCouponsCatComponent},
  { path: 'customer/get-customer-coupons-max-price', component:CustomerCouponsMaxComponent},
  { path: 'customer/get-all-coupons', component:AllCouponsComponent},
  { path: 'customer/get-customer-details', component: CustomerDetailsComponent},
  { path: ' ', component: MainComponent, pathMatch:'full'},
  { path: '**', component: MainComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
