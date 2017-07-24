import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `<h1>Welcome!</h1>
                <form (submit)="onSubmit()">
                <div class = "container">
                    <div class = "form-group">
                        <label>Name</label>
                        <input type = "text" [(ngModel)]="name" name="name" class = "form-control">
                    </div>

                        <input type = "submit" value = "submit" class = "btn btn-success">
                </div>
                </form>
                <h4>Name: {{name}}</h4>
                <hr>
                <div>
                <ul class= "list-group">
                    <li class="list-group-item" *ngFor="let user of users">
                    {{ user }}</li>
                </ul>
                </div>

    `

})

export class SandboxComponent{
    name: string = "";
    users:string []= ['Vinnie Paz', 'Jane Austen', 'Amber Rose'];

    onSubmit(){
        this.users.push(this.name);
        this.name = "";
    }
    }
