import { CustomerService } from './../../services/customer.service';
import { TypeClientService } from './../../services/type-client.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { DialogBox6Component } from '../dialog-box6/dialog-box6.component';
import { DialogBox7Component } from '../dialog-box7/dialog-box7.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public dialogRef;
  constructor(public dialog: MatDialog,private customerService:CustomerService, private router:Router,private typeClientService: TypeClientService) { }

  ngOnInit(): void {
  }

  openDialog(action, obj) {
    obj.action = action;
    if(action=='sort By Category'){
      this.dialogRef = this.dialog.open(DialogBox6Component, {
        width: '300px',
        data: obj
      });
    }else if(action=='sort By Max Price'){
      this.dialogRef = this.dialog.open(DialogBox7Component, {
        width: '300px',
        data: obj
      });
    }
    
    /* const dialogRef = this.dialog.open(DialogBox6Component, {
      width: '300px',
      
      data: obj
    }); */

    this.dialogRef.afterClosed().subscribe(result => {
     
        if(action=='sort By Category'){
          if(this.customerService.toSortCat){
            this.router.navigate(['customer/get-customer-coupons-category']);
           }
          
         }else if(action=='sort By Max Price'){
           if(this.customerService.toSortMax){
             this.router.navigate(['customer/get-customer-coupons-max-price']);
           }
          
         }
      
     
        
     
      
      
    });
  }


}
