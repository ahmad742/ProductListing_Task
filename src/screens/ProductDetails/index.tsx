import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { useCart, Product } from '@context/CartContext';
import { useFavorites } from '@context/FavoritesContext';
import Toast from 'react-native-toast-message';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

type RootStackParamList = {
  ProductDetails: { product: Product };
};

type ProductDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

const SIZES = ['S', 'M', 'L'];
const COLORS = ['#E57373', '#64B5F6', '#FFB74D'];

export const ProductDetailsScreen = () => {
  const route = useRoute<ProductDetailsScreenRouteProp>();
  const navigation = useNavigation();
  const { product } = route.params;
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [quantity, setQuantity] = useState(1);
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    // Add the product to cart with the selected quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    
    // Show success toast
    Toast.show({
      type: 'success',
      text1: 'Added to Cart',
      text2: `${quantity} ${quantity > 1 ? 'items' : 'item'} added to your bag`,
      position: 'bottom',
      visibilityTime: 2000,
    });
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product);
    Toast.show({
      type: 'success',
      text1: isFavorite ? 'Removed from Favorites' : 'Added to Favorites',
      text2: isFavorite
        ? 'Item has been removed from your favorites'
        : 'Item has been added to your favorites',
      position: 'bottom',
      visibilityTime: 2000,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false}>
        <View style={styles.imageContainer}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Image source={{ uri: product.image }} style={styles.image} />
          <TouchableOpacity 
            style={[
              styles.favoriteButton,
              isFavorite && styles.favoriteButtonActive
            ]} 
            onPress={handleToggleFavorite}
          >
            <Text style={[
              styles.favoriteIcon,
              isFavorite && styles.favoriteIconActive
            ]}>
              ♥
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          
          <Text style={styles.description}>
            Made from organic cotton with a lightly brushed finish, this regular-fit shirt has a 
            sharp pointed collar and fastens with tonal organic buttons.
          </Text>

          <View style={styles.optionsSection}>
            <Text style={styles.optionTitle}>Sizes</Text>
            <View style={styles.sizesContainer}>
              {SIZES.map((size) => (
                <TouchableOpacity
                  key={size}
                  style={[
                    styles.sizeButton,
                    selectedSize === size && styles.selectedSize,
                  ]}
                  onPress={() => setSelectedSize(size)}
                >
                  <Text style={[
                    styles.sizeText,
                    selectedSize === size && styles.selectedSizeText
                  ]}>
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.optionsSection}>
            <Text style={styles.optionTitle}>Color</Text>
            <View style={styles.colorsContainer}>
              {COLORS.map((color) => (
                <TouchableOpacity
                  key={color}
                  style={[
                    styles.colorButton,
                    { backgroundColor: color },
                    selectedColor === color && styles.selectedColor,
                  ]}
                  onPress={() => setSelectedColor(color)}
                />
              ))}
            </View>
          </View>

          <View style={styles.quantitySection}>
            <Text style={styles.optionTitle}>Quantity</Text>
            <View style={styles.quantityControls}>
              <TouchableOpacity 
                style={[styles.quantityButton, quantity <= 1 && styles.quantityButtonDisabled]} 
                onPress={() => setQuantity(prev => Math.max(1, prev - 1))}
                disabled={quantity <= 1}
              >
                <Text style={[styles.quantityButtonText, quantity <= 1 && styles.quantityButtonTextDisabled]}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity 
                style={styles.quantityButton} 
                onPress={() => setQuantity(prev => prev + 1)}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}
        >
          <Text style={styles.addToCartText}>Add to Bag</Text>
        </TouchableOpacity>
      </View>
      <Toast />
    </SafeAreaView>
  );
}; 