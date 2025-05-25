import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/Home';
import { CartScreen } from '../screens/Cart';
import { FavoritesScreen } from '../screens/Favorites';
import { AnimatedTabBar } from '../components/AnimatedTabBar';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <AnimatedTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
      />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen}
      />
      <Tab.Screen 
        name="Favorites" 
        component={FavoritesScreen}
      />
    </Tab.Navigator>
  );
} 