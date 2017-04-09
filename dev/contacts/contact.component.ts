import {Component} from 'angular2/core';

@Component({
     selector:'contact',
     template:` 
        <div>
             firstName: <input [(ngModel)]='contact.firstName' type='text'><br/> 
             lastName: <input [(ngModel)]='contact.lastName' type='text'>
        </div><br/>
         <div>
             Phone Number:{{contact.phone}}<br>
             E-mail: {{contact.email}}
         </div>
     `,
     inputs:['contact']
})

export class ContactComponent{
     public contact={};
}