import React, { memo, useContext, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeContext } from '../../../../context/global';
import { useCommonStyles } from '../../../../hooks/useCommonStyles';
import { StarWarsCharacter } from '../../../../types';
import {
  addCharacterToFavorite,
  removeCharacterFromFavorite,
  selectAllFavoriteCharacters,
} from '../../../../../../store/slices/starWarsCharactersSlice';

interface IHeroCardHeaderProps {
  hero: StarWarsCharacter;
}

export const HeroCardHeader = memo(({ hero }: IHeroCardHeaderProps) => {
  const { textColorPrimary } = useCommonStyles();
  const { isDarkTheme } = useContext(ThemeContext);

  const dispatch = useDispatch();
  const favoriteCharacters = useSelector(selectAllFavoriteCharacters);
  const isFavorite = favoriteCharacters.some(
    character => character.name === hero.name,
  );

  const handleFavotiteHeroToggle = () => {
    if (isFavorite) {
      dispatch(removeCharacterFromFavorite(hero));
    } else {
      dispatch(addCharacterToFavorite(hero));
    }
  };

  return (
    <View style={styles.nameIconBox}>
      <Text style={[textColorPrimary, styles.nameText]}>{hero.name}</Text>
      <TouchableOpacity
        onPress={handleFavotiteHeroToggle}
        style={styles.iconContainer}
      >
        <Image
          source={
            isFavorite
              ? require('../../../../../../assets/images/favorite.png')
              : isDarkTheme
              ? require('../../../../../../assets/images/not-favorite-dark-theme.png')
              : require('../../../../../../assets/images/not-favorite-light-theme.png')
          }
          style={styles.favoriteIcon}
        />
      </TouchableOpacity>
    </View>
  );
});

// export default memo(HeroCard);

const styles = StyleSheet.create({
  favoriteIcon: {
    width: 30,
    height: 30,
  },
  iconContainer: {
    marginRight: 10,
    marginBottom: 10,
  },
  nameIconBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameText: {
    fontWeight: '500',
    fontSize: 30,
  },
});
