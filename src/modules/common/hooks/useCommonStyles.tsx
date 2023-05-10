import { useContext, useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { ThemeContext } from '../context/global';
import { commonStyles } from '../../../styles';

export const useCommonStyles = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const {
    container,
    textColorDefault,
    textColorPrimary,
    containerSecondary,
    btnPrimaryColors,
  } = useMemo(() => stylesStyleSheet(isDarkTheme), [isDarkTheme]);

  return {
    container,
    textColorDefault,
    containerSecondary,
    textColorPrimary,
    btnPrimaryColors,
  };
};

const stylesStyleSheet = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDarkMode
        ? commonStyles.colors.swedish_pallet_black_pearl
        : commonStyles.colors.swedish_pallet_megaman,
      flex: 1,
    },
    containerSecondary: {
      backgroundColor: isDarkMode
        ? commonStyles.colors.indian_pallet_magenta_purple
        : commonStyles.colors.indian_pallet_fiery_fuchsia,
    },
    textColorDefault: {
      color: isDarkMode ? commonStyles.colors.white : commonStyles.colors.black,
    },
    textColorPrimary: {
      color: isDarkMode
        ? commonStyles.colors.indian_pallet_falling
        : commonStyles.colors.indian_pallet_white_pepper,
    },
    btnPrimaryColors: {
      backgroundColor: isDarkMode
        ? commonStyles.colors.swedish_pallet_sunset_orange
        : commonStyles.colors.swedish_pallet_red_orange,
    },
  });
