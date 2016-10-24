import {Component} from "@angular/core";
import {FamilleService} from "./app.famille.service"
@Component({
  selector: 'users',
  template: `<h1>{{title}}</h1>
              <ul>
                <li *ngFor="let user of users">
                  {{user.name}}
                </li>
              </ul>
              <button (click)="addMember()">Ajouter un prénom</button>`,
  providers:[FamilleService]
})
export class userComponent {
  title = "La petite famille s'agrandit, essayez de trouver le prénom de notre petite future";
  users=[];

  addMember(){
    this.users.push({id:1,name:"new"})
  }

  constructor(private _familleService:FamilleService){
    this.users=_familleService.getFamille();
  }


}
