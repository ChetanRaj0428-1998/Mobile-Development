import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {
press=0;
  constructor() { }
  feedback=[];
  putData(x)
  {
this.feedback.push(x);
console.log("array",x);
  }

  getData()
  {  
   return this.feedback;
  }
 
 putDat(x)
 {
   this.press=x;
   console.log("Pressed", x);
 }

 getDat()
 {
   return this.press;

 }
}
