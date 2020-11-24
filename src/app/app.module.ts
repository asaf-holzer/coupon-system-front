import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HttpClientModule} from '@angular/common/http';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { UpdateCompanyFormComponent } from './components/update-company-form/update-company-form.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { DialogBox2Component } from './components/dialog-box2/dialog-box2.component';
import { CompanycouponsComponent } from './components/companycoupons/companycoupons.component';
import { LoginComponent } from './components/login/login.component';
import { CouponComponent } from './components/coupon/coupon.component';
import { CustomercouponsComponent } from './components/customercoupons/customercoupons.component';
import { AllCouponsComponent } from './components/all-coupons/all-coupons.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DialogBox3Component } from './components/dialog-box3/dialog-box3.component';
import { DialogBox4Component } from './components/dialog-box4/dialog-box4.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { DialogBox5Component } from './components/dialog-box5/dialog-box5.component';
import { OneCompanyComponent } from './components/one-company/one-company.component';
import { OneCustomerComponent } from './components/one-customer/one-customer.component';
import { CompanyCouponsCatComponent } from './components/company-coupons-cat/company-coupons-cat.component';
import { DialogBox6Component } from './components/dialog-box6/dialog-box6.component';
import { CompanyCouponsMaxComponent } from './components/company-coupons-max/company-coupons-max.component';
import { DialogBox7Component } from './components/dialog-box7/dialog-box7.component';
import { CustomerCouponsCatComponent } from './components/customer-coupons-cat/customer-coupons-cat.component';
import { CustomerCouponsMaxComponent } from './components/customer-coupons-max/customer-coupons-max.component';
import { DialogBoxLogoutComponent } from './components/dialog-box-logout/dialog-box-logout.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    AdminComponent,
    CompanyComponent,
    CustomerComponent,
    CompanyListComponent,
    CustomerListComponent,
    UpdateCompanyFormComponent,
    DialogBoxComponent,
    DialogBox2Component,
    CompanycouponsComponent,
    LoginComponent,
    CouponComponent,
    CustomercouponsComponent,
    AllCouponsComponent,
    DialogBox3Component,
    DialogBox4Component,
    DialogBox5Component,
    OneCompanyComponent,
    OneCustomerComponent,
    CompanyCouponsCatComponent,
    DialogBox6Component,
    CompanyCouponsMaxComponent,
    DialogBox7Component,
    CustomerCouponsCatComponent,
    CustomerCouponsMaxComponent,
    DialogBoxLogoutComponent,
    CompanyDetailsComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatTabsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
