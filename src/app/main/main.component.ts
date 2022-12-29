import { Component, Input } from '@angular/core';
import { Member } from 'src/types';
import { membersApiUrl } from 'src/urls/urls';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
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
