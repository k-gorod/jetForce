import React from 'react';

export type SwapiPeople = {
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
}

export type ErrorResponse = any; // to correctly handle response error full layer implementation required

export type SwapiPeopleResponse = {
  count: number,
  next: string,
  previous: string,
  results: SwapiPeople[]
}

export type ContentStateType = {
  isLoading: boolean;
  searchQuery: string;
  itemList: never[];
  itemsCount: number;
  currentPage: number;
}

export type CustomKeyboardEventType = React.KeyboardEvent & {
  target: {
    value?: string
  }
}
