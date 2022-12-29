import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Member } from 'src/types';
import { membersApiUrl } from 'src/urls/urls';

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

  constructor(route: ActivatedRoute) {
    route.params.subscribe((params: Params) => {
      this.personId = params['personId'];
      this.getMember().then((member) => (this.member = member));
    });
  }

  getProfilePicture() {
    let url = this.member.PhotoURL
      ? this.member.PhotoURL
      : 'assets/blank-profile-picture.jpg';
    return url;
  }

  getBirthDate() {
    if (!this.member.BirthDate) return '';
    try {
      let date = new Date(this.member.BirthDate);
      return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
    } catch (e) {
      return '';
    }
  }
}
