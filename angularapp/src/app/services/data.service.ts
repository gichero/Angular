import { Injectable } from '@angular/core';


@Injectable()
export class DataService{
    users:string[];

    constructor(){
        this.users = ["Nyaks", "Gush", "Agua", "Samithe", "Bobithe", "Kagai"];
    }
    getUsers(){
        return this.users;
    }
}
