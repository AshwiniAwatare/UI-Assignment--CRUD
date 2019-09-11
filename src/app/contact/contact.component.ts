import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerResponseService } from '../services/server-response.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  addRow: boolean;
  constructor(public _response: ServerResponseService) { }
  contactList = [];
  ngOnInit() {
    this._response.getDataList().subscribe(data => {
      this.contactList = data;
    })
  }

  DeleteContact(contact, contactList) {
    var objIndex = contactList.indexOf(contact);
    contactList.splice(objIndex, 1);
  }
  EditContact(contact) {
    contact.editable = true;
  }
  cancelContact(contact) {
    contact.editable = false;
  }
  saveContact(contact) {
    contact.editable = false;
    contact.firstName = contact.firstName;
    contact.lastName = contact.lastName;
    contact.email = contact.email;
    contact.phoneNo = contact.phoneNo;
  }
  newAttribute: any = {};
  addContact(newContact) {
    this.contactList.push(this.newAttribute)
    this.newAttribute = {};
   console.log(newContact);
  }
}
