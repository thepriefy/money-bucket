import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authService: AuthService, private router: Router) {
    if ('uid' in localStorage) {
      this.router.navigate(['/home']);
      return;
    }
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.email, this.password);
    // this.email = this.password = '';
  }
}
