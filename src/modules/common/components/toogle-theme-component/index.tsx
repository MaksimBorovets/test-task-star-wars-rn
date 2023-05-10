import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DarkModeItem from '../../../../assets/icons/brightness.svg';
import { ThemeContext } from '../../context/global';
import { useCommonStyles } from '../../hooks/useCommonStyles';
import { commonStyles } from '../../../../styles';
import { NAVIGATION_KEYS, RootStackParamList } from '../../../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

export const ToggleThemeComponent = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const { textColorDefault } = useCommonStyles();
  const styles = stylesStyleSheet(isDarkTheme);
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleNavigateToFavoritesScreen = () => {
    navigate(NAVIGATION_KEYS.FAVORITES);
  };
  return (
    <View style={styles.toggleThemeComponentBox}>
      <TouchableOpacity
        onPress={handleNavigateToFavoritesScreen}
        style={styles.button}
      >
        <Text style={[styles.favoritesText, textColorDefault]}>
          See Your Favorites <Text style={styles.star}>⭐️</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.themeIcon} onPress={toggleTheme}>
        <DarkModeItem />
      </TouchableOpacity>
    </View>
  );
};

const stylesStyleSheet = (isDarkTheme: boolean) =>
  StyleSheet.create({
    toggleThemeComponentBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 30,
      marginBottom: 10,
    },
    themeIcon: {
      padding: 20,
      borderRadius: 10,
      width: 35,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDarkTheme
        ? commonStyles.colors.swedish_pallet_good_n
        : commonStyles.colors.swedish_pallet_iriel_yellow,
    },
    favoritesText: {
      fontWeight: '700',
      fontSize: 15,
    },
    button: {
      backgroundColor: isDarkTheme
        ? commonStyles.colors.spanish_pallet_lucky_point
        : commonStyles.colors.swedish_pallet_dark_periwinkle,
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    star: {
      fontSize: 20,
    },
  });
