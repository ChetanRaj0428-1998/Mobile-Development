import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';//to use http methods
import {Contact} from './contacts/contact';//using the schema
import { map } from 'rxjs/operators';//reactjs operator, A map is a data collection type where data is stored in the form of pairs. It contains a unique key. The value stored in the map must be mapped to the key. We cannot store a duplicate pair in the map(). It is because of the uniqueness of each stored key. It is mainly used for fast searching and looking up data.
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: Http) {}

  //retrieving ContactService

  getContacts()
  {
    return this.http.get('http://localhost:3000/api/contacts')
    .pipe(map(res=> res.json()));
    } 

    //delete contact method
  deleteContact(id)
  {
    
    return this.http.delete('http://localhost:3000/api/contacts/'+id)
    .pipe(map(res=> res.json()));

  }

    //add contact method
  addContact(newContact)
  {
    var headers = new Headers;//HTTP headers let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon ( : ), then by its value. Whitespace before the value is ignored
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/contacts', newContact, {headers:headers})
    .pipe(map(res => res.json()));
  }

  

}
