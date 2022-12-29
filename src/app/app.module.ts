import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MinimizedPersonComponent } from './minimized-person/minimized-person.component';
import { FullPersonComponent } from './full-person/full-person.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MinimizedPersonComponent,
    FullPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
