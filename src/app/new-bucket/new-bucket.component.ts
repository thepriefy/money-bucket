import { Component, OnInit } from '@angular/core';

import { ManageBucketService } from '../manage-bucket.service';

@Component({
  selector: 'app-new-bucket',
  templateUrl: './new-bucket.component.html',
  styleUrls: ['./new-bucket.component.css']
})
export class NewBucketComponent implements OnInit {
  bucketName: string;
  constructor(public manageBucketService: ManageBucketService) { }

  ngOnInit() {
  }

  createBucket() {
    this.manageBucketService.createBucket(this.bucketName);
  }
}
