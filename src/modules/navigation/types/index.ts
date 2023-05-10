export enum NAVIGATION_KEYS {
  HOME = 'HOME',
  FAVORITES = 'FAVORITES',
}

export type RootStackParamList = {
  [NAVIGATION_KEYS.HOME]: undefined;
  [NAVIGATION_KEYS.FAVORITES]: undefined;
};
