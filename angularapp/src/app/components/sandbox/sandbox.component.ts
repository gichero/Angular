import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `<h1>Welcome!</h1>
                <button id = "btn" (click)="fireEvent($event)">Click Event</button>
                <br>
                <button id = "btn" (mouseover)="fireEvent($event)">MouseOver Event</button>
                <br>
                <button id = "btn" (mousedown)="fireEvent($event)">MouseDowm Event</button>
                <br>
                <button id = "btn" (mouseup)="fireEvent($event)">MouseUp Event</button>
                <br>
                <button id = "btn" (dblclick)="fireEvent($event)">DoubleClick</button>
                <br>
                <button id = "btn" (drag)="fireEvent($event)">Drag Event</button>
                <br>
                <button id = "btn" (dragover)="fireEvent($event)">DragOver Event</button>
    `

})

export class SandboxComponent{
    fireEvent(e){
        console.log(e.type);
    }
    }
