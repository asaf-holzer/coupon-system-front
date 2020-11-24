import { Company } from './../../models/Company';
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, NgModel, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

export interface UsersData {
  id: number;
  name: string;
  email: string;
  password: string;
}



@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {

 /*  const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));

console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
<input pattern="[a-zA-Z ]*">
@param pattern */
  

  email = new FormControl('', [Validators.required, Validators.email]);
  

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  name1 = new FormControl('', [Validators.required, Validators.pattern('^[A-Z].*$')]);
  getErrorMessageName() {
    if (this.name1.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name1.hasError('pattern') ? 'must start with capital letter' : '';
  }

  pass = new FormControl('', [Validators.required, Validators.minLength(4)]);

  getErrorMessagePass(){
    if (this.pass.hasError('required')) {
      return 'You must enter a value';
    }

    return this.pass.hasError('minLength') ? 'the min password is 4 char' : ''; 
  }

  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = {...data};
    console.log(this.local_data.name+"TEST!!!!!!!!!!!!!!!!!!!!!!");
    this.action = this.local_data.action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data,});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
