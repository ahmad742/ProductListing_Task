import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './src/context/CartContext';
import { FavoritesProvider } from './src/context/FavoritesContext';
import { AppNavigator as RootNavigator } from './src/navigation/AppNavigator';
import Toast from 'react-native-toast-message';
import { SplashScreen } from './src/components/SplashScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate some loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show splash for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

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
