import React from 'react';
import { StyleSheet, View } from 'react-native';

import { HeaderItem } from './components/header-item';
import { formatNumber } from '../../helpers';
import { ToggleThemeComponent } from '../toogle-theme-component';

interface IProps {}

const GENDER_STATS_TABS = [
  {
    title: 'Female Fans',
    count: 1,
  },
  {
    title: 'Male Fans',
    count: 100000,
  },
  {
    title: 'Others',
    count: 100,
  },
];

export const Header = () => {
  return (
    <View style={styles.container}>
      <ToggleThemeComponent />
      <View style={styles.itemsContainer}>
        {GENDER_STATS_TABS.map(({ count, title }) => (
          <HeaderItem count={formatNumber(count)} title={title} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
});
