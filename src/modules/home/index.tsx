import React from 'react';
import { View } from 'react-native';

import { Header } from '../common/components/header';
import { useCommonStyles } from '../common/hooks/useCommonStyles';

interface IProps {}

export const HomeScreen = () => {
  // TODO : fetck list
  // const { data, error, isLoading } = useGetStarWarsCharactersQuery({
  //   page: 1,
  //   pageSize: 10,
  // });

  const { container } = useCommonStyles();

  return (
    <View style={container}>
      <Header />
    </View>
  );
};
