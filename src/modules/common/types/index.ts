export enum GENDER {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export interface StarWarsCharacter {
  name: string;
  birth_year: string;
  gender: GENDER;
  homeworld: string;
  species: string[];
}

export interface Planet {
  name: string;
}

export interface Species {
  name: string;
}
