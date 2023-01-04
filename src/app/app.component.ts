import { Component } from '@angular/core';
import { MembersService } from './members.service';
import { PartiesService } from './parties.service';
import { WebsitesService } from './websites.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    public membersService: MembersService,
    public partiesService: PartiesService,
    public websiteService: WebsitesService
  ) {}
}
