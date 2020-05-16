import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
items1;
  constructor(private service:InfoService) {
    
    this.items1=service.medName;
   }
   delItem(x)
   {
     console.log(x);
     this.service.delItem(x);
   }

  ngOnInit() {
  }

}
