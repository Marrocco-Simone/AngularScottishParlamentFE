import { Injectable } from '@angular/core';
import { Member } from 'src/types';
import { membersApiUrl } from 'src/urls/urls';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  members: Member[] = [];

  async getMembers(): Promise<Member[]> {
    let res = await fetch(membersApiUrl);
    let members: Member[] = await res.json();
    return members;
  }

  constructor() {
    this.getMembers().then((members) => (this.members = members));
  }

  getSingleMember(personId: string) {
    return this.members.find((m) => `${m.PersonID}` == personId);
  }

  getProfilePicture(member: Member) {
    let url = member.PhotoURL
      ? member.PhotoURL
      : 'assets/blank-profile-picture.jpg';
    return url;
  }

  getBirthDate(member: Member) {
    if (!member.BirthDate) return '';
    try {
      let date = new Date(member.BirthDate);
      return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
    } catch (e) {
      return '';
    }
  }
}
