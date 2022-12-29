export type Member = {
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