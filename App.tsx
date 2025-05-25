import React from 'react';
import { AppNavigator } from './src/navigation/AppNavigator';
import { CartProvider } from './src/context/CartContext';
import { FavoritesProvider } from './src/context/FavoritesContext';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <AppNavigator />
        <Toast />
      </FavoritesProvider>
    </CartProvider>
  );
}
