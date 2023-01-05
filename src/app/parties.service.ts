import { Injectable } from '@angular/core';
import { MemberParties, Party } from 'src/types';
import { membersPartyApiUrl, partiesApiUrl } from 'src/urls/urls';

@Injectable({
  providedIn: 'root'
})
export class PartiesService {
  private parties!: Party[];
  private members_parties!: MemberParties[];

  private async getParties() {
    console.log('fetching parties');
    let res = await fetch(partiesApiUrl);
    this.parties = await res.json();
  }

  private async getMembersParties() {
    console.log('fetching member parties');
    let res = await fetch(membersPartyApiUrl);
    this.members_parties = await res.json();
  }

  constructor() {
    this.getParties();
    this.getMembersParties();
  }

  private getPartyName(party_id: number): string {
    if (!this.parties?.length) return "";
    return this.parties.find((mp) => mp.ID == party_id)?.ActualName ?? "";
  }

  getPersonParties(personId: string): string[] {
    if (!this.parties?.length || !this.members_parties?.length) return [];
    let member_parties = this.members_parties.filter((mp) => `${mp.PersonID}` == personId);
    let parties_names: string[] = [];

    for (let pmp of member_parties) {
      let party_name = this.getPartyName(pmp.PartyID);
      if (!party_name) continue;

      if (pmp.ValidFromDate) {
        let date = new Date(pmp.ValidFromDate);
        party_name += `, from ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
      }
      if (pmp.ValidUntilDate) {
        let date = new Date(pmp.ValidUntilDate);
        party_name += ` until ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
      }

      parties_names.push(party_name);
    }

    return parties_names;
  }
}
