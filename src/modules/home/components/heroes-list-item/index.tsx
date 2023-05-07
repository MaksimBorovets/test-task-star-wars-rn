import React, { useContext, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StarWarsCharacter } from '../../../common/types';
import { useCommonStyles } from '../../../common/hooks/useCommonStyles';
import { ThemeContext } from '../../../common/context/global';
import { useGetHomeWorldQuery } from '../../../../store/api/starWars';

interface IHeroCardProps {
  hero: StarWarsCharacter;
}

export const HeroCard = ({ hero }: IHeroCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { containerSecondary, textColorPrimary } = useCommonStyles();
  const { isDarkTheme } = useContext(ThemeContext);
  const res = hero.homeworld.replace(/\D/g, '');

  const { data: heroHomeWorld, isLoading } = useGetHomeWorldQuery({
    planetNumber: res,
  });

  console.log(
    '🚀 ~ file: index.tsx:19 ~ HeroCard ~ heroHomeWorld:',
    heroHomeWorld && heroHomeWorld.name,
  );

  const handleFavotiteHeroToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={[containerSecondary, styles.cardContainer]}>
      <View style={styles.nameIconBox}>
        <Text style={[textColorPrimary, styles.nameText]}>{hero.name}</Text>
        <TouchableOpacity
          onPress={handleFavotiteHeroToggle}
          style={styles.iconContainer}
        >
          <Image
            source={
              isFavorite
                ? require('../../../../assets/images/favorite.png')
                : isDarkTheme
                ? require('../../../../assets/images/not-favorite-dark-theme.png')
                : require('../../../../assets/images/not-favorite-light-theme.png')
            }
            style={styles.favoriteIcon}
          />
        </TouchableOpacity>
      </View>
      <Text>{hero.birth_year}</Text>
      <Text>{hero.gender}</Text>
      <Text>{heroHomeWorld?.name}</Text>
      {hero.species && hero.species.map(el => <Text key={el}>{el}</Text>)}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    position: 'relative',
  },
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
