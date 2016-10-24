import { Component } from '@angular/core';
import { userComponent } from './app.users.component'

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular App</h1><h2><users></users></h2>`,
  directives: [userComponent]
})
export class AppComponent { }
