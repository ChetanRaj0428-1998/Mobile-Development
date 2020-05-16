import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, NavParams } from '@ionic/angular';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.page.html',
  styleUrls: ['./direct.page.scss'],
})
export class DirectPage implements OnInit {
i=0;isActive=true; 
testarr=[];
fcount=0;
/*items=['Aspirin',
'Antihistamine',
'Abilify',
'Adderall',
'Advair Diskus',
'Ambien',
'Concerta',
'Crestor',
'Cialis',
'Eliquis',
'Latisse',
'Lexapro',
'Lipitor',
'Lyrica',
'Nexium',
'Plavix',
'Singulair'];
  //constructor() { }*/
  ngOnInit() {
  }

  searchQuery: string = '';
  items1: any[];
  
  /*items = [{name:'Aspirin',isCheck:this.makeCheck,Cnum:0},
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
    {name:'Singulair',isCheck:false,Cnum:16}];*/
   

  constructor(public modalCtrl: ModalController,private service:InfoService) {
    this.initializeItems();
   this.testarr.length=this.service.disLength;
    this.testarr=this.service.testarr;
    this.isActive=this.service.isActive;
   if(this.testarr.length==17)
   {
     this.isActive=true;
   }
    
  }
 async openModal(characterNum) {

    let modal = await this.modalCtrl.create({
      component: ModalContentPage,
      componentProps: characterNum
    });

    modal.present();
  }


test(event,x)
{
  event.stopPropagation();
  console.log("Info button Working and Medicine:", x);
}

saveDis()
{
  
  this.service.testarr=this.testarr;
  this.service.disLength=this.testarr.length;
  this.service.isActive=false;
}

  saveCheck(x,y)
  {
    
    //this.service.saveData(this.items1);
    console.log(this.items1);
    //this.testarr=this.service.testarr;
    
  if(x==true)
  {
    this.service.temp.push(y);
    this.isActive=false;
    this.testarr.pop();
/*if(this.testarr.length<18)
{
  this.testarr[this.i]=x;
  this.i++;

}*/
   
  }

  else{
    console.log(y.name);
   
      //this.service.temp.splice(y,1);
      for(this.i=0;this.i<this.service.temp.length;this.i++)
      {
        if(y.name==this.service.temp[this.i].name)
        {
          this.service.temp.splice(this.i,1);
        }
      }
    if(this.testarr.length<18)
    {
    this.testarr.push(false);
    
  }

        if(this.testarr.length==17)
        {
          this.isActive=true;
        }
        

  }
  
  this.service.saveData(this.service.temp);
  console.log("temp",this.service.temp);
  console.log("testarr:",this.testarr);
  }

 

  initializeItems() {
    this.items1 = this.service.getData();//this.items1 = this.items;
     
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items1 = this.items1.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


}






@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Description
    </ion-title>
    <ion-buttons slot="end">
      <ion-button color="primary" (click)="dismiss()">
        Close
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content >
<ion-list lines="none">
<ion-item>
  <p>{{item.name}}</p>
  </ion-item>
  <ion-item>
  <p>{{item.description}}</p>
  </ion-item>
  </ion-list>
  <ion-button expand="block">Dispense It</ion-button>
</ion-content>
`
})
export class ModalContentPage {
  item;



 
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ModalController
  ) {
   
    var items = [{name:'Aspirin',isCheck:false,description:"This is a description"},
    {name:'Antihistamine',isCheck:false,description:"This is a description"},
    {name:'Abilify',isCheck:false,description:"This is a description"},
    {name:'Adderall',isCheck:false,description:"This is a description"},
    {name:'Advair Diskus',isCheck:false,description:"This is a description"},
    {name:'Ambien',isCheck:false,description:"This is a description"},
   {name:'Concerta',isCheck:false,description:"This is a description"},
    {name:'Crestor',isCheck:false,description:"This is a description"},
    {name:'Cialis',isCheck:false,description:"This is a description"},
    {name:'Eliquis',isCheck:false,description:"This is a description"},
    {name:'Latisse',isCheck:false,description:"This is a description"},
    {name:'Lexapro',isCheck:false,description:"This is a description"},
    {name:'Lipitor',isCheck:false,description:"This is a description"},
    {name:'Lyrica',isCheck:false,description:"This is a description"},
    {name:'Nexium',isCheck:false,description:"This is a description"},
    {name:'Plavix',isCheck:false,description:"This is a description"},
    {name:'Singulair',isCheck:false,description:"This is a description"}];

    this.item = items[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
