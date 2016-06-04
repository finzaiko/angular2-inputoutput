import {Component, View, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'child-cmp',
    inputs: ['myname'],
    outputs: ['myevent']
})

@View({
    template: `
        <div (click)="fireMyEvent()">
            Parent name here : {{myname}}
        </div>
    `,
})
export class ChildComponent { 
    myname: string = 'undefined';
    myevent = new EventEmitter();
    
    fireMyEvent(e){
        //this.myevent.next(['abc','def']);
        console.log('Fire event!');
        this.myevent.emit({
            value: this.myname = 'value change to finzaiko!'
        })
    }
}