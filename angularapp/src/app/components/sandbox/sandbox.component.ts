import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `<h1>Welcome!</h1>
                <p>My birthday is on {{birthday | date |uppercase}}</p>
                <p>My birthday is on {{birthday | date: "MM-dd-yyyy"}}</p>
                <p>My birthday in {{birthday | date: "yyyy"}}</p>
                <p>I listen to {{'audio books' | uppercase}}</p>
                <p>I hate {{'REALITY TV' | lowercase}}</p>
                <p>Your total is {{total | currency:"GBP":"1"}}</p>
                <p>Your fee is {{fee | percent}}</p>
    `

})

export class SandboxComponent{
    birthday = new Date(1976, 8, 8);
    total:number = 500;
    fee:number = 0.2;
    }
