import React, { useContext, useMemo } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';


import { RootNavigator } from './src/modules/navigation';
import { commonStyles } from './src/styles';
import {
  ThemeContext,
  ThemeProvider,
} from './src/modules/common/context/global';
import store from './src/store';

export const App = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const styles = useMemo(() => stylesStyleSheet(isDarkTheme), [isDarkTheme]);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </Provider>
  );
};

const stylesStyleSheet = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDarkMode
        ? commonStyles.colors.swedish_pallet_black_pearl
        : commonStyles.colors.swedish_pallet_megaman,
      flex: 1,
    },
  });
