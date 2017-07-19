import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
            <h1>Welcome!
            <!--
             <span *ngIf="showName">{{name}}</span>
             <span *ngIf="!showName">Winter is coming</span>
             -->
             <span *ngIf="showName; else noName">{{name}}</span>
             <ng-template #noName>Winter</ng-template>

             <p> Hello {{showName ? name : 'Winter'}}</p>
             <hr>
             <div [ngSwitch]="greeting">
                <div *ngSwitchCase = "'1'">Hello Mofos</div>
                <div *ngSwitchCase = "'2'">Hey</div>
                <div *ngSwitchCase = "'3'">What it do</div>
                <div *ngSwitchDefault>Niaje!</div>
             </div>
             </h1>
    `
})

export class SandboxComponent{
    name:string = "Tyrion Lanister";
    showName:boolean = true;
    greeting:number = 88;
}
