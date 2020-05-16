import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.page.html',
  styleUrls: ['./response.page.scss'],
})
export class ResponsePage implements OnInit {
myurl;
  myarr=[];
  constructor(service: FeedService) {
    this.myarr=service.getData();
    this.myurl=service.getURL();
   
  }

  ngOnInit() {
  }

}
