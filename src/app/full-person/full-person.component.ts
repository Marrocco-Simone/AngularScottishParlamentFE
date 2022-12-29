import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Member } from 'src/types';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-full-person',
  templateUrl: './full-person.component.html',
  styleUrls: ['./full-person.component.css'],
})
export class FullPersonComponent {
  personId!: string;
  member!: Member;

  membersService!: MembersService;

  constructor(
    route: ActivatedRoute,
    membersService: MembersService,
    router: Router
  ) {
    this.membersService = membersService;

    route.params.subscribe((params: Params) => {
      this.personId = params['personId'];
      let member = this.membersService.getSingleMember(this.personId);
      if (!member) {
        router.navigate(['/']);
        return;
      }
      this.member = member;
    });
  }
}
