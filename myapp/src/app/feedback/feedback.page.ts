import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  constructor(private service: FeedService) { }
img;
  SubmitForm(x)
{
  this.service.putData(x);
  this.service.putURL(this.img); 
}
  ngOnInit() {
  }

imgURL(x)
{
if(x == 1)
{
  this.img="assets/img/img1.jpg"
}
if(x == 2)
{
  this.img="assets/img/img2.jpg"
}
if(x == 3)
{
  this.img="assets/img/img3.jpg"
}

}

}
