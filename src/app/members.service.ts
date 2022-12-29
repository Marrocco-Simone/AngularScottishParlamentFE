import { Injectable } from '@angular/core';
import { Member } from 'src/types';
import { membersApiUrl } from 'src/urls/urls';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private members: Member[] = [];

  private async getMembers() {
    let res = await fetch(membersApiUrl);
    this.members = await res.json();
  }

  constructor() {
    this.getMembers();
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
