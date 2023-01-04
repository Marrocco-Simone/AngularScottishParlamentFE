import { Component, Input } from '@angular/core';
import { Member } from 'src/types';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-minimized-person',
  templateUrl: './minimized-person.component.html',
  styleUrls: ['./minimized-person.component.css'],
})
export class MinimizedPersonComponent {
  @Input()
  member!: Member;

  constructor(public membersService: MembersService) {}
}
