import { Component } from '@angular/core';
import { Customer } from './Customer';

@Component({
    selector: 'sandbox',
    template: `<h1>Welcome!</h1>`
})

export class SandboxComponent{
    customer: Customer;
    customers: Customer[];

    constructor(){
        this.customer = {
            id: 1,
            name: "Matimo",
            email: "matimo@gmail.com"
        }
        this.customers = [
            {id: 1,
            name: "Matimo",
            email: "matimo@gmail.com"},

            {id: 2,
            name: "Wairuhi",
            email: "wairuhi@gmail.com"},

            {id: 3,
            name: "Wangari",
            email: "wangari@gmail.com"}
        ]
    }
}
