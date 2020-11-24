import { AdminService } from 'src/app/services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersData } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-dialog-box5',
  templateUrl: './dialog-box5.component.html',
  styleUrls: ['./dialog-box5.component.css']
})
export class DialogBox5Component implements OnInit {

  

  ngOnInit(): void {
  }

  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<DialogBox5Component>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData, private adminService:AdminService) {
    console.log(data);
    this.local_data = {...data};
    console.log(this.local_data.id);
    this.action = this.local_data.action;
  }

  doAction(){
    if(this.action=='getCompany'){
      this.adminService.idCompany= this.local_data.id;
    }else if(this.action=='getCustomer'){
      this.adminService.idCustomer= this.local_data.id;
    }
    this.dialogRef.close({event:this.action, data:this.local_data,});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
