import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bucket_list = [
    {
      'name' : 'Bucket 1'
    },
    {
      'name' : 'Bucket 2'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
