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
  birth_date!: string;
  profile_picture_url!: string;
  parties!: string[];
  websites!: string[];

  constructor(
    route: ActivatedRoute,
    router: Router,
    membersService: MembersService,
    partiesService: PartiesService,
    websiteService: WebsitesService
  ) {
    route.params.subscribe((params: Params) => {
      let personId = params['personId'];
      let member = membersService.getSingleMember(personId);
      if (!member) {
        router.navigate(['/']);
        return;
      }
      this.member = member;
      this.birth_date = membersService.getBirthDate(member);
      this.profile_picture_url = membersService.getProfilePicture(member);

      this.parties = partiesService.getPersonParties(personId);
      this.websites = websiteService.getWebsiteUrls(personId);
    });
  }
}
