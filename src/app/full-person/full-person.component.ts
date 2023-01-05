import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Member } from 'src/types';
import { MembersService } from '../members.service';
import { PartiesService } from '../parties.service';
import { WebsitesService } from '../websites.service';

@Component({
  selector: 'app-full-person',
  templateUrl: './full-person.component.html',
  styleUrls: ['./full-person.component.css'],
})
export class FullPersonComponent {
  member!: Member;
  personId!: string;

  constructor(
    route: ActivatedRoute,
    router: Router,
    public membersService: MembersService,
    public partiesService: PartiesService,
    public websiteService: WebsitesService
  ) {
    route.params.subscribe((params: Params) => {
      this.personId = params['personId'];
      let member = membersService.getSingleMember(this.personId);
      if (!member) {
        router.navigate(['/']);
        return;
      }
      this.member = member;
    });
  }
}
