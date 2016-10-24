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
  `,
  providers:[FamilleService]
})
export class userComponent {
  title = "La petite famille s'agrandit, trouvez le nom de notre petite future";
  users=[];

  constructor(private _familleService:FamilleService){
    this.users=_familleService.getFamille();
  }
}
