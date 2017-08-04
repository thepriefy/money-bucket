import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ManageBucketService } from '../manage-bucket.service';
import {Router} from '@angular/router';
import {FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bucket_list: FirebaseListObservable<any[]>;

  constructor(private authService: AuthService, private manageBucketService: ManageBucketService, private router: Router) { }

  ngOnInit() {
    this.bucket_list = this.manageBucketService.getBucketList();
  }

  logout() {
    localStorage.clear();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
