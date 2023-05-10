import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Planet, Species, StarWarsCharacter } from '../../modules/common/types';

export interface IStarWarsResponse {
  count: number;
  next: string;
  previous: string;
  results: StarWarsCharacter[];
}

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: builder => ({
    getStarWarsCharacters: builder.query<
      IStarWarsResponse,
      { page?: number; pageSize?: number }
    >({
      query: ({ page = 1, pageSize = 10 }) => {
        console.log('firstpage', page);
        return `people/?page=${page}&page_size=${pageSize}`;
      },
    }),
    getHomeWorld: builder.query<Planet, { planetNumber: string }>({
      query: ({ planetNumber }) => `planets/${planetNumber}`,
    }),
    getSpecies: builder.query<Species, { speciesNumber: string }>({
      query: ({ speciesNumber }) => `species/${speciesNumber}`,
    }),
  }),
});

export const {
  useGetStarWarsCharactersQuery,
  useGetHomeWorldQuery,
  useGetSpeciesQuery,
} = starWarsApi;
