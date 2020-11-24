import { Component, OnInit } from '@angular/core';
import { Inject, Optional } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersData } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-dialog-box3',
  templateUrl: './dialog-box3.component.html',
  styleUrls: ['./dialog-box3.component.css']
})


export class DialogBox3Component implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<DialogBox3Component>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log('(1)'+data);
    this.local_data = {...data};
    console.log('(2)'+this.local_data);
    this.action = this.local_data.action;
  }
  ngOnInit(): void {
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data,});
   }
 
   closeDialog(){
     this.dialogRef.close({event:'Cancel'});
   }
}
