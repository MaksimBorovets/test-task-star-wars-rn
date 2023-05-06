import { useContext, useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { ThemeContext } from '../context/global';
import { commonStyles } from '../../../styles';

export const useCommonStyles = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { container, textColorDefault } = useMemo(
    () => stylesStyleSheet(isDarkTheme),
    [isDarkTheme],
  );

  return {
    container,
    textColorDefault,
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
    textColorDefault: {
      color: isDarkMode ? commonStyles.colors.white : commonStyles.colors.black,
    },
  });
