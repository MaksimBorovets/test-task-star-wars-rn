import React, { useContext } from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';

import { commonStyles } from '../../../../../../styles';
import { ThemeContext } from '../../../../context/global';

interface IHeaderItemProps {
  title: string;
  count: string;
}

export const HeaderItem = ({ count, title }: IHeaderItemProps) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const styles = stylesStyleSheet(isDarkTheme);
  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

const stylesStyleSheet = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDarkMode
        ? commonStyles.colors.swedish_pallet_london_square
        : commonStyles.colors.white,
      borderRadius: 7,
      padding: 5,
    },
    countText: {
      color: isDarkMode ? commonStyles.colors.white : commonStyles.colors.black,
      fontSize: 20,
      fontWeight: '700',
      marginBottom: 5,
    },
    titleText: {
      color: isDarkMode ? commonStyles.colors.white : commonStyles.colors.black,
    },
  });
