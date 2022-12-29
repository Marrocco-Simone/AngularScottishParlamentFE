import { Component, Input } from '@angular/core';
import { Member } from 'src/types';
import { membersApiUrl } from 'src/urls/urls';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  membersService!: MembersService;
  
  constructor(membersService: MembersService) {
    this.membersService = membersService;
  }
}
