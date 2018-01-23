import { Component } from '@angular/core';
import { ContactsService } from '../../shared/services/contacts.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Contact } from '../../shared/models/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: 'contacts.component.html'
})
export class ContactsComponent {

  private contacts: any[] = [];
  private filter: String = '';

  constructor(private contactService: ContactsService) {
    contactService.getContacts().subscribe(
      data => {
        this.contacts = data;
      },
      (err: HttpErrorResponse) => {
        alert(`Backend returned code ${err.status} with message: ${err.error}`);
      }
    );
  }

  remove(contact) {
    // const index = this.contacts.indexOf(contact);
    // this.contacts.splice(index, 1);
    this.contactService.removeContact(contact)
    .subscribe((contact) => 
  {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  });
  }

  submitContact(contact: Contact) {
    if (contact.id) {
      this.contactService.editContact(contact)
        .subscribe(
          (contact: Contact) => {
            let existing = this.contacts.filter(c => c.id == contact.id);
            if (existing.length) {
              Object.assign(existing[0], contact);
            }
          }
        );
    } else {
      this.contactService.addContact(contact)
        .subscribe(
          contact => {
            this.contacts.push(contact);
          }
        );
    }
  }

}
