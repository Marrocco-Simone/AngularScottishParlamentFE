import { Injectable } from '@angular/core';
import { Website } from 'src/types';
import { websitesApiUrl } from 'src/urls/urls';

@Injectable({
  providedIn: 'root',
})
export class WebsitesService {
  private websites!: Website[];

  private async getWebsites() {
    console.log('fetching websites');
    let res = await fetch(websitesApiUrl);
    this.websites = await res.json();
  }

  constructor() {
    this.getWebsites();
  }

  getWebsiteUrls(personId: string): string[] {
    if (!this.websites?.length) return [];
    return this.websites
      .filter((w) => `${w.PersonID}` == personId)
      .map((w) => w.WebURL);
  }
}
