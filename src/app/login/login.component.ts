import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoutersService } from '../service/routers.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private UserService: UserService, private router: RoutersService) { }

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
      if (this.getUsername()?.hasError('required')) {
        return "User Name should not be blank"
      }
      else if (this.getUsername()?.hasError('minlength')) {
        return "User Name should be atleast 3 chars"
      }
      return ""
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
  // ------------------------------------------------------------------------------------------

  login() {
    console.log("from login method", this.loginForm.value)

    this.UserService.getUsers().subscribe(data => {
      let i: number = 0;
      let counter: number = 1;
      for (i = 0; i < data.length; i++) {
        if (data[i].username == this.loginForm.value.username && data[i].password == this.loginForm.value.password) {
          counter++;
        }
        if (counter > 1) {
          localStorage.setItem("username", this.loginForm.value.username);
          this.router.toHome(this.loginForm.value.username)
        }
      }
    })
  }
}
