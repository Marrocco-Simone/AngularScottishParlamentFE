import { Component } from '@angular/core';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  inputSearchValue = '';

  constructor(public membersService: MembersService) {}

  onKeyPressed(event: any) {
    this.inputSearchValue = event.target.value;
  }
}
