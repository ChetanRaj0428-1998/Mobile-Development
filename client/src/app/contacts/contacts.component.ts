import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';//importing the service
import {Contact} from './contact';//using tthe schema

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ContactService]
})
export class ContactsComponent implements OnInit {
contacts : Contact[];
contact : Contact;
firstname : string;
lastname : string;
phone : string; 

  constructor(private contactService: ContactService) { }


addContact()
{
  const newContact = {
    firstname :  this.firstname,
    lastname :  this.lastname,
    phone :  this.phone
  }
  this.contactService.addContact(newContact)
    .subscribe(contact=>{
      this.contacts.push(contact);
    })
      //display 
    this.contactService.getContacts()
          .subscribe( contacts => 
            this.contacts = contacts);
}



  deleteContact(id:any)
  {
this.contactService.deleteContact(id)
.subscribe(data =>{
  if(data.n==1)
  {
    for(var i = 0; i< this.contacts.length;i++)
    {
      if(this.contacts[i]._id == id)
      {
        this.contacts.splice(i,1);
      }
    }
  }
})
  }
  ngOnInit(): void {
    this.contactService.getContacts()
          .subscribe( contacts => 
            this.contacts = contacts);
  }

}
