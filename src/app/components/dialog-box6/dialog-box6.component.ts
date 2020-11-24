import { CompanyService } from 'src/app/services/company.service';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { UsersData } from '../dialog-box/dialog-box.component';
import { CustomerService } from 'src/app/services/customer.service';
import { TypeClientService } from 'src/app/services/type-client.service';

@Component({
  selector: 'app-dialog-box6',
  templateUrl: './dialog-box6.component.html',
  styleUrls: ['./dialog-box6.component.css']
})
export class DialogBox6Component implements OnInit {

  ngOnInit(): void {
  }



  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<DialogBox6Component>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData, private customerService: CustomerService, private companyService: CompanyService, private typeClientService: TypeClientService) {
    console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  doAction() {
    if (this.typeClientService.type == 'company') {
      this.companyService.toSortCat = true;
      this.companyService.category = this.local_data.category;
    } else if (this.typeClientService.type == 'customer') {
      this.customerService.toSortCat = true;
      this.customerService.category = this.local_data.category;
    }
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    if (this.typeClientService.type == 'company') {
      this.companyService.toSortCat = false;
    } else if (this.typeClientService.type == 'customer') { 
      this.customerService.toSortCat = false; 
    }
    this.dialogRef.close({ event: 'Cancel' });
  }

}
