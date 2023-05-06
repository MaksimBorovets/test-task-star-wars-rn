import React, { useMemo } from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

import { HomeScreen } from '../home';
import { IRootStackParamList, NAVIGATION_KEYS } from './types';
import { NavigationWrapper } from './components/navigation-wrapper';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator<IRootStackParamList>();

const screenOptions = ({
  navigation,
}: {
  navigation: StackNavigationProp<IRootStackParamList>;
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
