import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  isFilter = false;
  allContacts: Contact[] = []
  contacts: Contact[] = [];
  constructor(){
  this.allContacts = [{
      name:"idan",
      phone: "0526651266"
    }]
    this.contacts = [{
      name:"idan",
      phone: "0526651266"
    }]
  }
  getContacts(){
    return this.contacts
  }
  addContact(contact: Contact){
    this.contacts.push(contact)
    this.allContacts.push(contact)
  }
  findContactByName(name: string): Contact | undefined{
    return this.contacts.find(contact => contact.name === name)
  }
  filterContact(search: string){
    this.contacts.splice(0, this.contacts.length)
    if (search.length === 0){
      this.contacts.push.apply(this.contacts, this.allContacts)
    } else {
       let filterd = this.allContacts.filter(contact => contact.name.includes(search))
       this.contacts.push.apply(this.contacts, filterd)
    }
  }
}
