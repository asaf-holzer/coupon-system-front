import { Injectable } from '@angular/core';
import { TypeClientService } from './type-client.service';
@Injectable()
export class AdminGuardService {
   

    constructor(private type:TypeClientService){}
    
    loggedIn = false;

    isAuth(){
        if(this.type.type==='admin'){
            this.loggedIn=true;
        }
        return this.loggedIn;
    }
}