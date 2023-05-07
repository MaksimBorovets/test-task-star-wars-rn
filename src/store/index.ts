import { configureStore } from '@reduxjs/toolkit';

import { starWarsApi } from './api/starWars';
import starWarsCharactersReducer from './slices/starWarsCharactersSlice';

const store = configureStore({
  reducer: {
    [starWarsApi.reducerPath]: starWarsApi.reducer,
    starWarsCharacters: starWarsCharactersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(starWarsApi.middleware),
});

export type RootStateType = ReturnType<typeof store.getState>;

export default store;
