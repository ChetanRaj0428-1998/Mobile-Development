import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.page.html',
  styleUrls: ['./expert.page.scss'],
})
export class ExpertPage implements OnInit {

val=0;
 gender;symptoms;date;alcohol;medication;surgery;

  

  SubmitForm(x)
  {
  
    console.log(x);
  }
  constructor() { }

  ngOnInit() {
  }

}
