import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { HeaderItem } from './components/header-item';
import { formatNumber } from '../../helpers';
import { ToggleThemeComponent } from '../toogle-theme-component';
import { useSelector } from 'react-redux';
import { selectAllFavoriteCharacters } from '../../../../store/slices/starWarsCharactersSlice';

export const Header = () => {
  const favoriteCharacters = useSelector(selectAllFavoriteCharacters);

  const [maleCount, femaleCount, otherCount] = useMemo(() => {
    const maleCount = favoriteCharacters.filter(
      character => character.gender === 'male',
    ).length;
    const femaleCount = favoriteCharacters.filter(
      character => character.gender === 'female',
    ).length;
    const otherCount = favoriteCharacters.filter(
      character => character.gender !== 'male' && character.gender !== 'female',
    ).length;
    return [maleCount, femaleCount, otherCount];
  }, [favoriteCharacters]);

  const GENDER_STATS_TABS = useMemo(
    () => [
      {
        title: 'Female Fans',
        count: femaleCount,
      },
      {
        title: 'Male Fans',
        count: maleCount,
      },
      {
        title: 'Others',
        count: otherCount,
      },
    ],
    [maleCount, femaleCount, otherCount],
  );

  return (
    <View style={styles.container}>
      <ToggleThemeComponent />
      <View style={styles.itemsContainer}>
        {GENDER_STATS_TABS.map(({ count, title }, index) => (
          <React.Fragment key={title + index}>
            <HeaderItem count={formatNumber(count)} title={title} />
          </React.Fragment>
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
