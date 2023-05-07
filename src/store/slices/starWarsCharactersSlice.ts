import { createSlice } from '@reduxjs/toolkit';

import { starWarsApi } from '../api/starWars';
import { RootStateType } from '..';
import { StarWarsCharactersState } from '../types';

const initialState: StarWarsCharactersState = {
  characters: [],
};

export const starWarsCharactersSlice = createSlice({
  name: 'starWarsCharacters',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      // TODO => change to selected characters
      starWarsApi.endpoints.getStarWarsCharacters.matchFulfilled,
      (state, action) => {
        state.characters = state.characters.concat(action.payload.results);
      },
    );
  },
});

export const selectUser = (state: RootStateType) =>
  state.starWarsCharacters.characters;

export default starWarsCharactersSlice.reducer;
