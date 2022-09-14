import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usersm } from '../models/user/user.module';
import { RoutersService } from '../service/routers.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userarray:Array<Usersm> = [];
  user:Usersm = new Usersm();

  constructor(private userService:UserService, private routerService:RoutersService) { }

  registerForm = new FormGroup(
    {
      username: new FormControl("", [Validators.required, Validators.minLength(3)]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6)]),
      email: new FormControl("", [Validators.required, Validators.email]),
    }
  )

  ngOnInit(): void {
  }

  // -------------This code is just to display the error----------------------

  getUsername() {
    return this.registerForm.get('username')
  }

  getPassword() {
    return this.registerForm.get('password')
  }

  getConfirmPassword() {
    return this.registerForm.get('confirmPassword')
  }

  getEmail() {
    return this.registerForm.get('email')
  }

  getUsernameError() {
    if (this.getUsername()?.invalid && (this.getUsername()?.dirty || this.getUsername()?.touched)) {
      return "User Name should not be blank"
    }
    else {
      return "";
    }
  }

  getPasswordError() {
    if (this.getPassword()?.invalid && (this.getPassword()?.dirty || this.getPassword()?.touched)) {
      if (this.getPassword()?.hasError('required')) {
        return "Password should not be blank"
      }
      else if (this.getPassword()?.hasError('minlength')) {
        return "Password should be atleast 6 chars"
      }
      return ""

    }
    else {
      return "";
    }
  }

  getConfirmPasswordError() {
    if (this.getConfirmPassword()?.invalid && (this.getConfirmPassword()?.dirty || this.getConfirmPassword()?.touched)) {
      if (this.getConfirmPassword()?.hasError('required')) {
        return "User Name should not be blank"
      }
      else if (this.getConfirmPassword()?.hasError('minlength')) {
        return "Password should be atleast 6 chars"
      }
      return ""

    }
    else {
      return "";
    }
  }

  getEmailError() {
    if (this.getEmail()?.invalid && (this.getEmail()?.dirty || this.getEmail()?.touched)) {
      return "Enter valid email"
    }
    else {
      return "";
    }
  }


  // ------------------------------------------------------------------------------------------

  register() {
    console.log("from login method", this.registerForm.value)
   // add todo into the array
   this.userarray.push(this.user);
   // add todo into db.json
   this.userService.addUsers(this.user)
   .subscribe(data => console.log(data))
   this.user  = new Usersm();
   this.routerService.toLogin()
  }
}
