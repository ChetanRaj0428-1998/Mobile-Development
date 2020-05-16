import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage  {
 myarr=[];
 item: number=0;
 constructor(private service: AddService)
  {
this.myarr=service.getData();
this.item=service.getDat();
  }

  delete(x){
    let index = this.myarr.indexOf(x);
     --this.item;
    if(index > -1){
      this.myarr.splice(index, 1);
    }
}

restore()
{
  this.service.putDat(this.item);
}
}
