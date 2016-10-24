import { Component } from '@angular/core';
import { userComponent } from './app.users.component'

@Component({
  selector: 'my-app',
  template: `
          <h1>Oh là là</h1>
          <users></users>`,
  viewProviders: [userComponent]
})
export class AppComponent { }
