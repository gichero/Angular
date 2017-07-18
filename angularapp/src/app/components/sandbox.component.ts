import {Component} from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `<h1>{{name}} is {{age}} years old, Damn!</h1>
               <h2>I also call myself {{person.firstName}} {{person.lastName}}</h2>
               <ul>
                    <li>{{'Hello World!'}}</li>
                    <li>{{98 * 27}}</li>
                    <li>{{showAge()}}</li>

               </ul>
    `
})

export class SandboxComponent{
    name = "Amos Gichero";
    age = 40;
    person = {firstName: "Matimo", lastName: "Gathungu"}

    constructor(){
        console.log("Constructor ran...");
        //this.age = 41;
        this.hasBirthday();
    }

    hasBirthday(){
        this.age +=1;
    }

    showAge(){
        return this.age;
    }
}
