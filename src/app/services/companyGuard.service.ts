
import { Injectable } from '@angular/core';
import { TypeClientService } from './type-client.service';
@Injectable()

export class CompanyGuardService {
   

    constructor(private type:TypeClientService){}
    
    loggedIn = false;

    isAuth(){
        if(this.type.type==='company'){
            this.loggedIn=true;
        }
        return this.loggedIn;
    }
}