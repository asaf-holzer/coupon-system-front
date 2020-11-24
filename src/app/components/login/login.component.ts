import { ToolbarComponent } from './../toolbar/toolbar.component';
import { TypeClientService } from './../../services/type-client.service';
import { TokenService } from './../../services/token.service';
import { LoginService } from './../../services/login.service';
import { Component, OnInit, Input, NgModule } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  email = new FormControl('', [Validators.required, Validators.email]);
  typeClient = new FormControl('', [Validators.required]);
  pass = new FormControl('', [Validators.required, Validators.minLength(4)]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageType(){
    return 'You must select a status';
  }
  getErrorMessagePass(){
    if (this.pass.hasError('required')) {
      return 'You must enter a value';
    }

    return this.pass.hasError('minLength') ? 'must be 4 char at list' : '';
  }

  hide = true;
  public email1: string;
  public password: string;
  public client: string;
  public flag: boolean;
  public type: string;
  public token: string;
  
  /* private toolbarComponent: ToolbarComponent, */
  public constructor( private loginService:LoginService, private tokenService:TokenService, private router: Router, private typeClientService: TypeClientService) { }

  ngOnInit(): void {
  }

  doAction(){
    console.log(this.client);
    switch (this.client){
      case 'admin':{this.type='Administrator'; this.typeClientService.type=this.client}break;
      case 'company': {this.type='Company', this.typeClientService.type=this.client}break;
      case 'customer': {this.type='Customer'; this.typeClientService.type=this.client}break;
    }

    
    this.loginService.login(this.email1, this.password, this.type).subscribe(
      (res)=>{  this.router.navigate(['/'+this.client]);  this.token= res.body;

        this.tokenService.token= this.token;
       // this.loginService.flag=false;
       // this.toolbarComponent.flagIN();
      },
      (err)=>{alert(err.error);
      } 
  );

  console.log("End doAction()");
  
  }
      
  closeDialog(){
     this.flag=true;
  }

}
