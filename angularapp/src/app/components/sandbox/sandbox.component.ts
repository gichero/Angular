import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `<h1>Welcome!</h1>
                <form>
                <div class = "container">
                    <div class = "form-group">
                        <label>Name</label>
                        <input type = "text" [(ngModel)]="name" name="name" class = "form-control">
                    </div>
                    <div class = "form-group">
                        <label>Age</label>
                        <input type = "number" [(ngModel)]="age" name="age" class = "form-control">
                    </div>
                        <input type = "submit" value = "submit" class = "btn btn-success">
                </div>
                </form>
                <h4>Name: {{name}}</h4>
                <h4>Age: {{age}}</h4>
    `

})

export class SandboxComponent{
    name: string = "";
    age: number = 0;
    }
