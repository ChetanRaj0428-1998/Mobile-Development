import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
i;j;k;temp=[];
medName=[];//medName=[''];
testarr=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
disLength=17;isActive=true;
ItemsData=[{name:'Aspirin',isCheck:false,Cnum:0},
  {name:'Antihistamine',isCheck:false,Cnum:1},
  {name:'Abilify',isCheck:false,Cnum:2},
  {name:'Adderall',isCheck:false,Cnum:3},
  {name:'Advair Diskus',isCheck:false,Cnum:4},
  {name:'Ambien',isCheck:false,Cnum:5},
 {name:'Concerta',isCheck:false,Cnum:6},
  {name:'Crestor',isCheck:false,Cnum:7},
  {name:'Cialis',isCheck:false,Cnum:8},
  {name:'Eliquis',isCheck:false,Cnum:9},
  {name:'Latisse',isCheck:false,Cnum:10},
  {name:'Lexapro',isCheck:false,Cnum:11},
  {name:'Lipitor',isCheck:false,Cnum:12},
  {name:'Lyrica',isCheck:false,Cnum:13},
  {name:'Nexium',isCheck:false,Cnum:14},
  {name:'Plavix',isCheck:false,Cnum:15},
  {name:'Singulair',isCheck:false,Cnum:16}];

  saveData(x)
  {
this.medName=x;

  }

  
getData()
{
  return this.ItemsData;
}


delItem(x)
{

  if(this.testarr.length<18)
  {
    this.testarr.push(false);
  }
console.log("service",x.name);
for(this.i=0;this.i<this.ItemsData.length;this.i++)//direct list
{
  if(x.name==this.ItemsData[this.i].name)
  {
    this.ItemsData[this.i].isCheck=false;
    
  }
}
for(this.k=0;this.k<this.medName.length;this.k++)//info list
{
  if(x.name==this.medName[this.k].name)
  {
    this.medName[this.k].isCheck=false;
    this.medName.splice(this.k,1);
    
  }
}
}


  constructor() { 
   
  }
}