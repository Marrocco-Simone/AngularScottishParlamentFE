import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Member } from 'src/types';
import { membersApiUrl } from 'src/urls/urls';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-full-person',
  templateUrl: './full-person.component.html',
  styleUrls: ['./full-person.component.css'],
})
export class FullPersonComponent {
  personId!: string;
  member!: Member;

  async getMember(): Promise<Member> {
    let res = await fetch(`${membersApiUrl}/${this.personId}`);
    let member: Member = await res.json();
    return member;
  }

  membersService!: MembersService;

  constructor(route: ActivatedRoute, membersService: MembersService) {
    this.membersService = membersService;

    route.params.subscribe((params: Params) => {
      this.personId = params['personId'];
      this.getMember().then((member) => (this.member = member));
    });
  }
}
