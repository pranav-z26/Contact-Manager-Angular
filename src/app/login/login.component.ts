import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm = new FormGroup(
    {
      username: new FormControl("", [Validators.required, Validators.minLength(3)]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    }
  )

  ngOnInit(): void {
  }
  // -------------This code is just to display the error----------------------

  getUsername() {
    return this.loginForm.get('username')
  }

  getPassword() {
    return this.loginForm.get('password')
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
        return "User Name should not be blank"
      }
      else if(this.getPassword()?.hasError('minlength')){
        return "Password should be atleast 6 chars"
      }
      return ""

    }
    else {
      return "";
    }
  }
  // ------------------------------------------------------------------------------------------

  login() {
    console.log("from login method", this.loginForm.value)
  }
}
