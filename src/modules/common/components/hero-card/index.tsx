import React, { memo, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StarWarsCharacter } from '../../types';
import { useCommonStyles } from '../../hooks/useCommonStyles';
import {
  useGetHomeWorldQuery,
  useGetSpeciesQuery,
} from '../../../../store/api/starWars';
import { urlOnlyNumberFormatter } from '../../helpers';
import { HeroCardHeader } from './components/heroes-card-header';

interface IHeroCardProps {
  hero: StarWarsCharacter;
}

export const HeroCard = memo(({ hero }: IHeroCardProps) => {
  const { containerSecondary } = useCommonStyles();

  const planetNumber = useMemo(
    () => urlOnlyNumberFormatter(hero.homeworld),
    [hero.homeworld],
  );

  const speciesNumber = useMemo(
    () => urlOnlyNumberFormatter(hero.homeworld),
    [hero.species],
  );

  const { data: heroHomeWorld } = useGetHomeWorldQuery(
    {
      planetNumber: planetNumber ?? '',
    },
    { skip: !Boolean(planetNumber) },
  );

  const { data: heroSpecies } = useGetSpeciesQuery(
    {
      speciesNumber: speciesNumber ?? '',
    },
    { skip: !Boolean(speciesNumber) },
  );

  return (
    <View style={[containerSecondary, styles.cardContainer]}>
      <HeroCardHeader hero={hero} />
      <View style={styles.textBox}>
        <Text style={styles.title}>Birth Year : </Text>
        <Text>{hero.birth_year}</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>Gender : </Text>
        <Text>{hero.gender}</Text>
      </View>
      {heroHomeWorld?.name && (
        <View style={styles.textBox}>
          <Text style={styles.title}>Home World : </Text>
          <Text>{heroHomeWorld?.name}</Text>
        </View>
      )}
      {heroSpecies?.name && (
        <View style={styles.textBox}>
          <Text style={styles.title}>Species : </Text>
          <Text>{heroSpecies?.name}</Text>
        </View>
      )}
    </View>
  );
});

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
  textBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
  },
  title: {
    width: '30%',
  },
  text: {},
});
