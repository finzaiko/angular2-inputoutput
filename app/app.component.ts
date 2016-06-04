import {Component} from 'angular2/core';
import {ChildComponent} from './child.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <child-cmp 
            [myname]="myFriend"
            (myevent)="handleMyEvent($event)"
            >
        </child-cmp>
    `,
    directives: [ChildComponent]
})
export class AppComponent { 
    myFriend: string;
    
    constructor(){
        this.myFriend = "Arifin";
    }
    
    handleMyEvent(e){
        console.log('Handle event arg: ', e);
    }
}