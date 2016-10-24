import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {userComponent} from "./app.users.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent,userComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
