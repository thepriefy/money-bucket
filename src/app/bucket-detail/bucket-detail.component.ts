import { Component, OnInit } from '@angular/core';
import {ManageBucketService} from '../manage-bucket.service';
import {FirebaseListObservable} from 'angularfire2/database';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-bucket-detail',
  templateUrl: './bucket-detail.component.html',
  styleUrls: ['./bucket-detail.component.css']
})
export class BucketDetailComponent implements OnInit {
  // bucket_obj: FirebaseListObservable<any[]>;
  bucket_obj: any;
  bucket_id: string;

  constructor(private manageBucketService: ManageBucketService, private route: ActivatedRoute) {
    route.params.subscribe(
      (params: Params) => {
        this.bucket_id = params['id'];
      }
    );

    this.bucket_obj = manageBucketService.getBucketDetail(this.bucket_id);
  }

  ngOnInit() {
  }

}
