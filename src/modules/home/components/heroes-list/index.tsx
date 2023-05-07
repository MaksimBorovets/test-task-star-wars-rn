import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
} from 'react-native';
import { useGetStarWarsCharactersQuery } from '../../../../store/api/starWars';
import { StarWarsCharacter } from '../../../common/types';
import { HeroCard } from '../heroes-list-item';

export const HeroesList = () => {
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState<number | undefined>(undefined);
  const [heroes, setHeroes] = useState<StarWarsCharacter[]>([]);

  const isReachEndOfHeroesList = totalCount && heroes.length >= totalCount;

  const { data, isLoading } = useGetStarWarsCharactersQuery(
    {
      page,
    },
    {
      skip: Boolean(isReachEndOfHeroesList),
    },
  );

  const handleEndReached = () => {
    if (!isReachEndOfHeroesList || heroes.length) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    if (data?.results) {
      setTotalCount(data.count);
      setHeroes(prevHeroes => {
        const newHeroesSet = new Set<StarWarsCharacter>(prevHeroes);
        data.results.forEach(hero => newHeroesSet.add(hero));
        return Array.from(newHeroesSet);
      });
    }
  }, [data, isLoading, page]);

  const renderFooter = () => {
    if (!isLoading) return null;
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator />
      </View>
    );
  };

  const renderItem = ({ item }: ListRenderItemInfo<StarWarsCharacter>) => (
    <View key={item.name}>
      <HeroCard hero={item} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={heroes}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.flatlist}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  activityIndicatorContainer: {
    marginVertical: 20,
  },
  contentContainerStyle: {
    paddingTop: 10,
  },
  flatlist: {
    marginTop: 10,
  },
});
