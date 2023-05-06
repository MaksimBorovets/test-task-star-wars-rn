import React, { createContext, useState, useEffect, useContext } from 'react';
import type { PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDarkTheme: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    async function getTheme() {
      try {
        const themeValue = await AsyncStorage.getItem('@theme');
        if (themeValue !== null) {
          setIsDarkTheme(themeValue === 'dark');
        } else {
          setIsDarkTheme(isDarkMode);
        }
      } catch (e) {
        console.log('Error retrieving theme value', e);
      }
    }
    getTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    try {
      await AsyncStorage.setItem('@theme', newTheme ? 'dark' : 'light');
    } catch (e) {
      console.log('Error storing new theme value', e);
    }
  };

  const themeContextValue = {
    isDarkTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
