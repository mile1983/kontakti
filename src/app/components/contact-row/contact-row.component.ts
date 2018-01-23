import {Component,Input,Output,EventEmitter,OnChanges,SimpleChange} from '@angular/core';

import{Contact} from '../../shared/models/contact.model';


@Component({
    selector: "[contactRow]",
    templateUrl:"contact-row.component.html"
})


export class ContactRowComponent{
    private contact: Contact;
    private oldIndex: number;
    @Input() 
    set contactRow(contact: Contact){
        this.contact = contact;
    }
    @Input() index: number;
    
    @Output() onEdit  = new EventEmitter<Contact>();
    @Output() onRemove  = new EventEmitter<Contact>();
    

    edit(contact){
                this.onEdit.emit(contact);
        }
    remove(contact){
            this.onRemove.emit(contact);
    }
ngOnChanges(changes:{[index:string]:SimpleChange}){
    if (changes.index.previousValue) {
        this.oldIndex = changes.index.previousValue;
    }
}


}