import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { starWarsApi } from '../api/starWars';
import { RootStateType } from '..';
import { StarWarsCharactersState } from '../types';
import { StarWarsCharacter } from '../../modules/common/types';

const initialState: StarWarsCharactersState = {
  favoriteCharacters: [],
};

export const starWarsCharactersSlice = createSlice({
  name: 'starWarsCharacters',
  initialState,
  reducers: {
    addCharacterToFavorite: (
      state,
      action: PayloadAction<StarWarsCharacter>,
    ) => {
      state.favoriteCharacters.push(action.payload);
    },
    removeCharacterFromFavorite: (
      state,
      action: PayloadAction<StarWarsCharacter>,
    ) => {
      const index = state.favoriteCharacters.findIndex(
        character => character.name === action.payload.name,
      );
      if (index !== -1) {
        state.favoriteCharacters.splice(index, 1);
      }
    },
  },
});

export const { addCharacterToFavorite, removeCharacterFromFavorite } =
  starWarsCharactersSlice.actions;

export const selectAllFavoriteCharacters = (state: RootStateType) =>
  state.starWarsCharacters.favoriteCharacters;

export default starWarsCharactersSlice.reducer;
