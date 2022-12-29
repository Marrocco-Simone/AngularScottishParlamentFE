import { Component, Input } from '@angular/core';
import { Member } from 'src/types';

@Component({
  selector: 'app-minimized-person',
  templateUrl: './minimized-person.component.html',
  styleUrls: ['./minimized-person.component.css']
})
export class MinimizedPersonComponent {
  @Input()
  member!: Member;

  getProfilePicture() {
    let url = this.member.PhotoURL
      ? this.member.PhotoURL
      : 'assets/blank-profile-picture.jpg';
    return url;
  }

  onclick(event: MouseEvent) {
    event.stopPropagation();
    console.log(`id: ${this.member.PersonID}`);
  }
}
