import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
            <h1>Welcome!</h1>
            {{people}}
            <ul>
                <li *ngFor="let person of people">
                    {{person}}
                </li>
            </ul>
            <ul>
                <li *ngFor="let person of people; let i = index">
                    {{i}} {{person}}
                </li>
            </ul>
            <ul>
                <li *ngFor="let person of people2">
                    {{person.firstName}} {{person.lastName}}
                </li>
            </ul>
    `

    ,

})

export class SandboxComponent{
    people = ['Sidney', ' Tess', ' Emilly', ' Brenda'];

    people2 = [
        {firstName: 'Sidney',
         lastName: 'Nzioka'},

        {firstName: 'Tess',
         lastName: 'Njakwe'},

        {firstName: 'Emilly',
         lastName: 'Gesare'},

        {firstName: 'Brenda',
         lastName: 'Akinyi'}
    ];

    constructor(){
        this.people[2] = "Emily";
    }
}
