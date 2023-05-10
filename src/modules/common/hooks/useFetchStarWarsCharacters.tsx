import { useContext, useEffect, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useGetStarWarsCharactersQuery } from '../../../store/api/starWars';
import { StarWarsCharacter } from '../types';

export const useFetchStarWarsCharacters = () => {
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
  }, [data, page]);

  return {
    handleEndReached,
    isLoading,
    heroes,
  };
};
