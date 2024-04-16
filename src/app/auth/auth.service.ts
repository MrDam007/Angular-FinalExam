import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from './auth.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth:boolean = false;
  authChange = new Subject<boolean>();
    private user:User | null;

    constructor(private router:Router){}

    registerUser(authData : AuthData){
        this.user = {
            email : authData.email ,
            userId : Math.round(Math.random() * 10000).toString()
        }
       this.successFullAuth();
    }

    login(authData:AuthData){
        this.user = {
            email : authData.email ,
            userId : Math.round(Math.random() * 10000).toString()
        }
        this.successFullAuth();
    }

    logout(){
        this.user = null ;
        this.auth = false;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }

    getUser(){
        return {...this.user} ;
    }

    isAuth(){
        return this.user != null ;
    }


    private successFullAuth(){
        this.auth = !this.auth
        this.authChange.next(true);
        this.router.navigate(['']);
    }
}
