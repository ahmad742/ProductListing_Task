import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Product } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { FONTS, FONT_SIZES } from '../theme/fonts';

interface ProductCardProps {
  product: Product;
  onViewDetails: () => void;
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 60) / 2;

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const isProductFavorite = isFavorite(product.id);

  const toggleFavorite = () => {
    if (isProductFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onViewDetails}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {product.title}
        </Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity 
        style={[
          styles.favoriteButton,
          isProductFavorite && styles.favoriteButtonActive
        ]} 
        onPress={toggleFavorite}
      >
        <Text style={[
          styles.favoriteIcon,
          isProductFavorite && styles.favoriteIconActive
        ]}>
          ♥
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    backgroundColor: '#f8f8f8',
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: FONT_SIZES.sm,
    fontFamily: FONTS.medium,
    marginBottom: 4,
    color: '#333',
  },
  price: {
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.bold,
    color: '#000',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteButtonActive: {
    backgroundColor: '#fff',
  },
  favoriteIcon: {
    fontSize: FONT_SIZES.lg,
    color: '#000',
  },
  favoriteIconActive: {
    color: '#ff3b30',
  },
});

export default ProductCard; 