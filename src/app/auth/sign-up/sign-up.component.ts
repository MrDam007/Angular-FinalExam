import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private authService : AuthService){}

  onSubmit(form:NgForm){
    // console.log(form)
    this.authService.registerUser({
      email : form.value.email,
      password : form.value.passeword
    })
  }
}
