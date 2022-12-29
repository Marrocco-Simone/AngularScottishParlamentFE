import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-full-person',
  templateUrl: './full-person.component.html',
  styleUrls: ['./full-person.component.css']
})
export class FullPersonComponent {
  personId!: string;

  constructor(route: ActivatedRoute) {
    route.params.subscribe((params: Params) => {
      this.personId = params['personId'];
    })
  }
}
