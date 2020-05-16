import { Component } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
   item=0;
   tap: number = 0;
   myarr=[];
  constructor(private service: AddService) {
    this.myarr=service.getData();
   this.tap=service.getDat();
  }
  
myval1;
myval2;
  SubmitForm(x)
  {
    this.service.putData(x);
    console.log(this.tap++);
    this.myval1="";
    this.myval2="";
  }
save()
{
  this.service.putDat(this.tap);
  console.log(this.service.getDat());
  
}
  
 
 
}
