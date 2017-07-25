import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bucket_list = [
    {
      'name' : 'Bucket 1',
      'id' : 1
    },
    {
      'name' : 'Bucket 2',
      'id' : 2
    }
  ];
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
