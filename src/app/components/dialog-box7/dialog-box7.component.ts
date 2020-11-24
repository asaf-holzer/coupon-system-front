import { Inject, Optional } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompanyService } from 'src/app/services/company.service';
import { CustomerService } from 'src/app/services/customer.service';
import { TypeClientService } from 'src/app/services/type-client.service';
import { UsersData } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-dialog-box7',
  templateUrl: './dialog-box7.component.html',
  styleUrls: ['./dialog-box7.component.css']
})
export class DialogBox7Component implements OnInit {

  ngOnInit(): void {
  }


  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<DialogBox7Component>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData, private customerService: CustomerService, private companyService: CompanyService, private typeClientService: TypeClientService) {
    console.log('the DATA is: ' + data);
    this.local_data = { ...data };
    console.log(this.local_data.maxPrice);
    this.action = this.local_data.action;
  }

  doAction() {
    if (this.typeClientService.type == 'company') {
      this.companyService.toSortMax = true;
      this.companyService.maxPrice = this.local_data.maxPrice;
    } else if (this.typeClientService.type == 'customer')
      this.customerService.toSortMax = true;
    this.customerService.maxPrice = this.local_data.maxPrice;
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    if (this.typeClientService.type == 'company') {
      this.companyService.toSortMax = false;
    } else if (this.typeClientService.type == 'customer') {
      this.customerService.toSortMax = false;
    }
    this.dialogRef.close({ event: 'Cancel' });
  }


}
