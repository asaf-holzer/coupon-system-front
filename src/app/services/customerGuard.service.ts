
import { Injectable } from '@angular/core';
import { TypeClientService } from './type-client.service';
@Injectable()

export class CustomerGuardService {
   

    constructor(private type:TypeClientService){}
    
    loggedIn = false;

    isAuth(){
        if(this.type.type==='customer'){
            this.loggedIn=true;
        }
        return this.loggedIn;
    }
}