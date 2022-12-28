import { Component } from '@angular/core';

// attach `/${ID}` to get only a single record
const gendersApiUrl = 'https://data.parliament.scot/api/genders';
const membersApiUrl = 'https://data.parliament.scot/api/members';
const membersPartyApiUrl = 'https://data.parliament.scot/api/memberparties';
const partiesApiUrl = 'https://data.parliament.scot/api/parties';
const websitesApiUrl = 'https://data.parliament.scot/api/websites';

type Member = {
  PersonID: number;
  PhotoURL: string;
  Notes: string;
  BirthDate: string;
  BirthDateIsProtected: boolean;
  ParliamentaryName: `${string}, ${string}`;
  PreferredName: string;
  // to get the gender string: gendersApiUrl
  GenderTypeID: number;
  IsCurrent: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  members: Member[] = [];

  async getMembers(): Promise<Member[]> {
    let res = await fetch(membersApiUrl);
    let members: Member[] = await res.json();
    return members;
  }

  constructor() {
    this.getMembers().then((members) => this.members = members);
  }

  getProfilePicture(member: Member) {
    let url = member.PhotoURL ? member.PhotoURL : "assets/blank-profile-picture.png"; 
    console.log(url);
    return url;
  }

  memberToString(member: Member) {
    return `${member.ParliamentaryName} (${member.PersonID})`;
  }
}
