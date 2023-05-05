import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  useGetStarWarsCharactersQuery,
} from '../../store/api/starWars';

interface IProps {}

export const HomeScreen = () => {
  const { data, error, isLoading } = useGetStarWarsCharactersQuery({
    page: 1,
    pageSize: 10,
  });

  return (
    <View style={styles.container}>
      <Text>DELETE_THIS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
