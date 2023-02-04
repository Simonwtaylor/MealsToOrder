import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/contexts/theme';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style={'dark'} />
    </>
  );
}
