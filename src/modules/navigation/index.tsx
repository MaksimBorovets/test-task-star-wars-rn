import React, { useMemo } from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

import { HomeScreen } from '../home';
import { RootStackParamList, NAVIGATION_KEYS } from './types';
import { NavigationWrapper } from './components/navigation-wrapper';
import { NavigationContainer } from '@react-navigation/native';
import { FavoriteHeroesScreen } from '../favorite-heroes-screen';

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList>;
}): StackNavigationOptions => {
  return {
    headerShown: false,
  };
};

export const RootNavigator = () => {
  const screens = useMemo(
    () => (
      <>
        <Stack.Screen
          name={NAVIGATION_KEYS.HOME}
          component={HomeScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name={NAVIGATION_KEYS.FAVORITES}
          component={FavoriteHeroesScreen}
          // options={screenOptions}
        />
      </>
    ),
    [],
  );

  return (
    <NavigationContainer>
      <NavigationWrapper>
        <Stack.Navigator
          screenOptions={screenOptions}
          initialRouteName={NAVIGATION_KEYS.HOME}
        >
          {screens}
        </Stack.Navigator>
      </NavigationWrapper>
    </NavigationContainer>
  );
};
