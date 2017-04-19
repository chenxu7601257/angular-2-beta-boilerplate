import {Component, OnInit} from 'angular2/core';
import {ContactComponent} from './contact.component';
import {ContactService} from './contact.service';
import {Contact} from './contact';

@Component({
    selector:'contact-list',
    template:`
        <ul>
            <li *ngFor='#contact of contacts'
                 (click)='onSelect(contact)'
                 [class.clicked]='selectedContact===contact'
            >
                {{contact.firstName}} {{contact.lastName | uppercase}}
            </li>
        </ul>
        <contact *ngIf="selectedContact!=null" [contact]="selectedContact"></contact>
    `,
    directives:[ContactComponent],
    providers:[ContactService],
    styleUrls:['../src/css/contact-list.css']
})

export class ContactListComponent implements OnInit {
      
    public selectedContact=null;
    public contacts:Contact[];

    constructor(private _contactService:ContactService){

    }
      
    onSelect(contact){
        this.selectedContact=contact;
    }

    getContacts(){
        this._contactService.getContacts().then((contacts:Contact[])=>{
              this.contacts=contacts;
        });
    }

    ngOnInit() {
         this.getContacts();
    }
}