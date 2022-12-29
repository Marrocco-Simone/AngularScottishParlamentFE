import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullPersonComponent } from './full-person/full-person.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "personDetail/:personId", component: FullPersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
