import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../constants/Colors';

const Themes = ['morning', 'afternoon', 'evening'];

const ThemeContext = createContext({
  theme: 'morning',
  setTheme: () => {},
  colors: Colors['morning'],
  loading: true,
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('morning');
  const [loading, setLoading] = useState(true);
  const colors = Colors[theme];

  useEffect(() => {
    AsyncStorage.getItem('@user_preferred_theme')
      .then((storedTheme) => {
        if (storedTheme) {
          setTheme(storedTheme);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('@user_preferred_theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, loading, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider, Themes };