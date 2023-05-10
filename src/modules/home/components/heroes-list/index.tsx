import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
} from 'react-native';

import { HeroCard } from '../../../common/components/hero-card';
import { useFetchStarWarsCharacters } from '../../../common/hooks/useFetchStarWarsCharacters';
import { StarWarsCharacter } from '../../../common/types';

export const HeroesList = () => {
  const { handleEndReached, heroes, isLoading } = useFetchStarWarsCharacters();

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
