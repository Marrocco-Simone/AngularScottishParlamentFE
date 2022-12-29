import { Component } from '@angular/core';
import { Member } from 'src/types';

// attach `/${ID}` to get only a single record
const gendersApiUrl = 'https://data.parliament.scot/api/genders';
const membersApiUrl = 'https://data.parliament.scot/api/members';
const membersPartyApiUrl = 'https://data.parliament.scot/api/memberparties';
const partiesApiUrl = 'https://data.parliament.scot/api/parties';
const websitesApiUrl = 'https://data.parliament.scot/api/websites';

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
    this.getMembers().then((members) => (this.members = members));
  }
}
