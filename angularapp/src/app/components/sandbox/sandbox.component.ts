import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
            <h1>Welcome!</h1>
            <h2 [class.special]="isSpecial">This class binding is special</h2>
            <h2 [ngClass]="currentClasses">This div is initially special and savable</h2>
            `,
            styles:[
                `
                    .special{
                        color: purple
                    }
                    .savable{
                        text-transform: uppercase
                    }
                `
            ]

})

export class SandboxComponent{
    isSpecial:boolean = true;
    canSave:boolean = true;
    currentClasses = {};

        constructor(){
            this.setCurrentClasses();
        }

        setCurrentClasses(){
            this.currentClasses = {
                savable:this.canSave,
                special:this.isSpecial
            }
        }
    }
