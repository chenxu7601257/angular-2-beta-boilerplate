import {Component, OnInit} from 'angular2/core';
import {ContactComponent} from './contact.component';
import {ContactService} from './contact.service';
import { Contact } from './contact';
import { Router, ROUTER_DIRECTIVES, RouteParams } from "angular2/router";

@Component({
    selector:'new-contact',
    template:`
       <div>
            <div>
                <label for='first-name'>First Name:</label>
                <input type='text' id='first-name' #firstname><br/> 
            </div>
            <div>
                <label for='last-name'>Last Name:</label>
                <input type='text' id='last-name' #lastname value={{passLastName}}><br/> 
            </div>
            <div>
                <label for='phone'>Phone number:</label>
                <input type='text' id='phone' #phone><br/> 
            </div>
            <div>
                <label for='email'>E-Mail:</label>
                <input type='text' id='email' #email><br/> 
            </div> 
        </div>
        <br/> 
        <button (click)="onAddContact(firstname.value,lastname.value,phone.value,email.value)">Create Contact</button>
    `,
    styles:[
        `
            label{
                display:inline-block;
                width:140px;
            }
            input{
                width:250px;
            }
        `
    ],
    providers:[ContactService,ROUTER_DIRECTIVES]
})

export class NewContactComponent implements OnInit {
       
    public passLastName=null;
    
    ngOnInit() {
        this.passLastName=this._routerParams.get('lastName');
    }


    constructor(private _contactService:ContactService,private _router:Router,
    private _routerParams:RouteParams
    ){

    }

     onAddContact(firstName:string,lastName:string,phone:string,email:string){
        const dummyContact={
            firstName:firstName,
            lastName: lastName,
            phone:phone,
            email:email
         };
         this._contactService.insertContact(dummyContact);
         this._router.navigate(['Contacts']);
     }
}