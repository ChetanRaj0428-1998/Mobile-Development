import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
myurl;
  feedback=[];
  putData(x)
  {
this.feedback.push(x);
console.log("Array Updated",this.feedback);
  }
    getData()
    {  
     return this.feedback;
    }
    putURL(x)
    {
this.myurl=x;
console.log(x);
    }
    getURL()
    {
return this.myurl;
    }
}
