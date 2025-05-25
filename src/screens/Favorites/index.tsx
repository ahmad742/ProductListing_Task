import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useFavorites } from '@context/FavoritesContext';
import { Product } from '@context/CartContext';
import ProductCard from '../../components/ProductCard';
import { FadeInView, ScaleInView } from '@utils/animations';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export const FavoritesScreen = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const navigation = useNavigation();

  const renderItem = ({ 
    item, 
    index 
  }: { 
    item: Product; 
    index: number 
  }) => (
    <FadeInView delay={index * 100} duration={600}>
      <ProductCard
        product={item}
        onViewDetails={() => {
          // @ts-expect-error - Navigation typing issue
          navigation.navigate('ProductDetails', { product: item });
        }}
      />
    </FadeInView>
  );

  if (favorites.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <ScaleInView style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No favorites yet</Text>
          <Text style={styles.emptySubtext}>
            Start adding some items to your favorites!
          </Text>
        </ScaleInView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
}; 