import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})
export class BucketListComponent implements OnInit {
  @Input() bucket_name: string;

  constructor() { }

  ngOnInit() {
  }

}
