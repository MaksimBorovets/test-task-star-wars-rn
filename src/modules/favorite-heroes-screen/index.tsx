import React from 'react';
import { View } from 'react-native';

import { FavoriteHeroesList } from './components/favorite-heroes-list';
import { useCommonStyles } from '../common/hooks/useCommonStyles';

export const FavoriteHeroesScreen = () => {
  const { container } = useCommonStyles();

  return (
    <View style={container}>
      <FavoriteHeroesList />
    </View>
  );
};
