import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './src/context/CartContext';
import { FavoritesProvider } from './src/context/FavoritesContext';
import { AppNavigator as RootNavigator } from './src/navigation/AppNavigator';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <NavigationContainer>
      <CartProvider>
        <FavoritesProvider>
          <RootNavigator />
          <Toast />
        </FavoritesProvider>
      </CartProvider>
    </NavigationContainer>
  );
};

export default App;
