import {Component} from "@angular/core";

@Component({
  selector: 'users',
  template: `<h1>{{title}}</h1>
              <ul>
                <li *ngFor="let user of users">
                  {{user}}
                </li>
              </ul>
  `
})
export class userComponent {
  title = "Le Titre";
  users=["Julien", "Pauline", "???"];

}
