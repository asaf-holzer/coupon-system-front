import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { UsersData } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-dialog-box-logout',
  templateUrl: './dialog-box-logout.component.html',
  styleUrls: ['./dialog-box-logout.component.css']
})
export class DialogBoxLogoutComponent implements OnInit {

  
  ngOnInit(): void {
  }

  
  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxLogoutComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData, private loginService:LoginService) {
    console.log(data);
    this.local_data = {...data};
    console.log(this.local_data.name+"TEST!!!!!!!!!!!!!!!!!!!!!!");
    this.action = this.local_data.action;
  }

  doAction(){
    this.loginService.toLogout=true;
    this.dialogRef.close({event:this.action,data:this.local_data,});
  }

  closeDialog(){
    this.loginService.toLogout=false;
    this.dialogRef.close({event:'Cancel'});
  }
}
