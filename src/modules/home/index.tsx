import React from 'react';
import { View } from 'react-native';

import { Header } from '../common/components/header';
import { useCommonStyles } from '../common/hooks/useCommonStyles';
import { HeroesList } from './components/heroes-list';

interface IProps {}

export const HomeScreen = () => {

  const { container } = useCommonStyles();

  return (
    <View style={container}>
      <Header />
      <HeroesList />
    </View>
  );
};
