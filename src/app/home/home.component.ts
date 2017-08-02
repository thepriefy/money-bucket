import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ManageBucketService } from '../manage-bucket.service';
import {Router} from '@angular/router';

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
  constructor(public authService: AuthService, public manageBucketService: ManageBucketService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
