import React from 'react';
import {
  Button,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { HeroCard } from '../../../common/components/hero-card';
import { StarWarsCharacter } from '../../../common/types';
import { useSelector } from 'react-redux';
import { selectAllFavoriteCharacters } from '../../../../store/slices/starWarsCharactersSlice';
import { useCommonStyles } from '../../../common/hooks/useCommonStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';

export const FavoriteHeroesList = () => {
  const favoriteCharacters = useSelector(selectAllFavoriteCharacters);
  const { textColorPrimary, textColorDefault, btnPrimaryColors } = useCommonStyles();
  const { goBack } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const handleGoBack = () => {
    goBack();
  };

  const renderItem = ({ item }: ListRenderItemInfo<StarWarsCharacter>) => (
    <View key={item.name}>
      <HeroCard hero={item} />
    </View>
  );

  const renderListEmptyComponent = () => (
    <View style={styles.emptyComponentContainer}>
      <Text style={[styles.emptyText, textColorDefault]}>
        You Have Not Added Favorite Heroes Yet 😳
      </Text>
      <TouchableOpacity
        onPress={handleGoBack}
        style={[btnPrimaryColors, styles.goBackBtnBox]}
      >
        <Text style={[styles.goBackBtnText, textColorPrimary]}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={favoriteCharacters}
        scrollEnabled={Boolean(favoriteCharacters.length)}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.flatlist}
        ListEmptyComponent={renderListEmptyComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  emptyComponentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainerStyle: {
    flex: 1,
    paddingTop: 10,
  },
  flatlist: {
    marginTop: 10,
    flex: 1,
  },
  emptyText: {
    fontSize: 20,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  goBackBtnText: {
    fontSize: 30,
    marginHorizontal: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  goBackBtnBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8
  },
});
