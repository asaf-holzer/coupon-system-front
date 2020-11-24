import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersData } from '../dialog-box/dialog-box.component';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-dialog-box4',
  templateUrl: './dialog-box4.component.html',
  styleUrls: ['./dialog-box4.component.css']
})
export class DialogBox4Component implements OnInit {
  
  action:string;
  local_data:any;
  
  
  cid = new FormControl('', [Validators.required]);
  cat = new FormControl('', [Validators.required]);
  title = new FormControl('', [Validators.required]);
  desc = new FormControl('', [Validators.required]);
  sdate = new FormControl('', [Validators.required]);
  edate = new FormControl('', [Validators.required]);
  amount = new FormControl('', [Validators.required, Validators.min(1)]);
  price = new FormControl('', [Validators.required, Validators.min(0.1)]);
  image = new FormControl('', [Validators.required]);
  today=new Date();
  minDate =new Date();

  requiredField(){
    return 'You must enter a value';
  }

  requiredFieldDate(){
    if(this.sdate.hasError('required') || this.edate.hasError('required')){
      return 'You must enter a value';
  }
}

  

  requiredFieldAmount(){
    if(this.amount.hasError('required')){
    return 'You must enter a value';
  }
  return this.amount.hasError('min') ? 'must be 1 in amount at list' : '';
}

requiredFieldPrice(){
  if(this.price.hasError('required')){
  return 'You must enter a value';
}
return this.price.hasError('min') ? 'the price must be 0.1 at list' : '';
}




  constructor(
    public dialogRef: MatDialogRef<DialogBox4Component>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = {...data};
    console.log(this.local_data.firstName+"TEST!!!!!!!!!!!!!!!!!!!!!!");
    this.action = this.local_data.action;
  }

  doAction(){
   this.dialogRef.close({event:this.action , data:this.local_data,});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  ngOnInit(): void {
  }

}
