import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
// import {FormControl, Validators} from '@angular/forms';

// const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  displayName: string;
  email: string;
  password: string;
  rePassword: string;

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern(EMAIL_REGEX)]);

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  signup() {
    if (this.password === this.rePassword) {
      this.authService.signup(this.email, this.password, this.displayName);
      // this.email = this.password = this.rePassword = '';
    }
  }
}
