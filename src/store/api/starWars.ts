import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Planet, StarWarsCharacter } from '../../modules/common/types';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: builder => ({
    getStarWarsCharacters: builder.query<
      StarWarsCharacter[],
      { page?: number; pageSize?: number }
    >({
      query: ({ page = 1, pageSize = 10 }) =>
        `people/?page=${page}&page_size=${pageSize}`,
    }),
    getHomeWorld: builder.query<Planet[], { planetNumber: string }>({
      query: ({ planetNumber }) => `planets/${planetNumber}`,
    }),
  }),
});

export const { useGetStarWarsCharactersQuery } = starWarsApi;
