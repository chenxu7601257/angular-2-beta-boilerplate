import {Component} from 'angular2/core';
import {ContactComponent} from './contact.component'

@Component({
    selector:'contact-list',
    template:`
        <ul>
            <li *ngFor='#contact of contacts'
                 (click)='onSelect(contact)'
                 [class.clicked]='selectedContact===contact'
            >
                {{contact.firstName}} {{contact.lastName}}
            </li>
        </ul>
        <contact [contact]="selectedContact"></contact>
    `,
    directives:[ContactComponent]
})

export class ContactListComponent{
    public contacts=[{
        firstName:'Max', lastName:'Schwarzuller',phone:'010-45443443',email:'max@schwar.com'
    },{
        firstName:'Jacob', lastName:'Chenxu',phone:'028-45443443',email:'jacob@schwar.com'
    },{
        firstName:'Dasiy', lastName:'Maersk',phone:'020-7878443443',email:'daisy.maersk@schwar.com'
    },{
        firstName:'David', lastName:'LiuXiao',phone:'0810-34766767',email:'daisvy@schwar.com'
    },{
        firstName:'Linux', lastName:'Apple',phone:'030-170965',email:'linxuapple@schwar.com'
    }];

    public selectedContact={};

    onSelect(contact){
        this.selectedContact=contact;
    }
}