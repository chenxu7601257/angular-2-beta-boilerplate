import {Component, OnInit} from 'angular2/core';
import {ContactComponent} from './contact.component';
import {ContactService} from './contact.service';
import { Contact } from './contact';
import { Router, ROUTER_DIRECTIVES, RouteParams } from "angular2/router";
import { ControlGroup, FormBuilder } from 'angular2/common';
import { Validators } from "angular2/src/common/forms";

//下面的这种方式也可以双向绑定form 通过ngModel的形式

@Component({
    selector:'new-contact-backup',
    template:`
    <form #myForm='ngForm' (ngSubmit)='onSubmit()'>
       <div>
            <div>
                <label for='first-name'>First Name:</label>
                <input type='text' id='first-name'
                    ngControl='firstName'
                    [(ngModel)]='newContact.firstName'
                    required
                    #firstName='ngForm'  
                >
                <span *ngIf='!firstName.valid'>Not valid</span>
                <br/> 
            </div>
            <div>
                <label for='last-name'>Last Name:</label>
                <input type='text' id='last-name'
                     ngControl='lastName'
                     [(ngModel)]='newContact.lastName'
                    required
                ><br/> 
            </div>
            <div>
                <label for='phone'>Phone number:</label>
                <input type='text' id='phone'
                    ngControl='phone'
                     [(ngModel)]='newContact.phone'
                    required
                ><br/> 
            </div>
            <div>
                <label for='email'>E-Mail:</label>
                <input type='text' id='email'
                    ngControl='email'
                     [(ngModel)]='newContact.email'
                    required
                ><br/> 
            </div> 
        </div>
        <br/> 
        <button [disabled]='!myForm.form.valid' (click)="onAddContact(firstname.value,lastname.value,phone.value,email.value)">Create Contact</button>
     </form>
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

            .ng-invalid{
                border:1px solid red;
            }
        `
    ],
    providers:[ContactService,ROUTER_DIRECTIVES]
})

export class NewContactComponent implements OnInit {
       
    //public passLastName=null;
    newContact:Contact;
    myForm:ControlGroup;
    
    ngOnInit() {
         this.newContact={
                firstName:'',
                lastName:this._routerParams.get('lastName'),
                phone:'',
                email:''
         };

        //  this.myForm=this._formBuilder.group({
        //      'firstName':['',Validators.required],
        //      'lastName':['',Validators.required],
        //      'phone':['',Validators.required],
        //      'email':['',Validators.required]
        //  });
    }


    constructor(private _contactService:ContactService,private _router:Router,
    private _routerParams:RouteParams, private _formBuilder:FormBuilder){

    }

     onAddContact(firstName:string,lastName:string,phone:string,email:string){
        const dummyContact={
            firstName:firstName,
            lastName: lastName,
            phone:phone,
            email:email,
         };
         this._contactService.insertContact(dummyContact);
         this._router.navigate(['Contacts']);
     }

     onSubmit(){
        this._contactService.insertContact(
            this.newContact
        );
        this._router.navigate(['Contacts']);
     }
}