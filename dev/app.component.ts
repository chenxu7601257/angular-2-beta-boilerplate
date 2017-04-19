import {Component} from 'angular2/core';
import {ContactListComponent} from './contacts/contact-list.component';
import {ROUTER_PROVIDERS} from 'angular2/router';
import { RouteConfig } from 'angular2/router';
import { NewContactComponent } from './contacts/new-contact.component';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { HTTPTestComponent } from "./http-test.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav>
                <a [routerLink]='["Contacts"]'>Contacts</a>
                <a [routerLink]='["NewContact"]'>New Contact</a>
            </nav>
        </header>
        <br/>
        <div class="main">
            <router-outlet></router-outlet>
            <http-test></http-test>
            <div class='pipes'>
                <h2>Date Pie</h2>
                <div>
                    {{ date | date:'fullDate'}}
                </div>
                <div>
                    {{4.5665678|number:'1.2-2'}}
                </div>
                <div>
                    {{15.99 | currency:'EUR':true:'1.4-4'}}
                </div>
                <div>
                    {{randomData | async }}
                </div>
            </div>
        </div>
        `,
    directives:[ContactListComponent,ROUTER_DIRECTIVES,HTTPTestComponent],
    styleUrls:['../src/css/app.css']
})

@RouteConfig([
   {path:'/contacts',name:'Contacts',component:ContactListComponent,useAsDefault:true},
   {path:'/newcontact',name:'NewContact',component:NewContactComponent},

   //下面的方式可以，但是没有带？好的地址s
   //{path:'/newcontact/:lastName',name:'NewContactFromContact',component:NewContactComponent}
])

export class AppComponent {
      date=new Date();
      randomData=new Promise((resolve,reject)=>{
          setTimeout(()=>resolve('Random data!'),1000);
      })
}