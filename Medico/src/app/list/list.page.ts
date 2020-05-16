import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  items=[{name:"cold",check:false},
  {name:"headache",check:false},
  {name:"stomach",check:false},
  {name:"sneeze",check:false},
  {name:"chest",check:false},
  {name:"throat",check:false},
  {name:"cough",check:false},
  {name:"joint",check:false}];//new

  tick(x)
  {
    x.check=!x.check;
    console.log(x);
  }
  constructor() {
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
